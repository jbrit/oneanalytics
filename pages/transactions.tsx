import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { DatePicker } from "$components/DatePicker/DatePicker.styles";
import { Select } from "$components/Select/Select";
import {
  TypographyFour,
  TypographyOne,
  TypographyThree,
  TypographyTwo,
} from "$components/Typography/Typography.styles";
import Layout from "layout/Layout/Layout";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { ArrowDown } from "svg/arrow-down";
import { Date as DateSVG } from "svg/date";
import { Filter } from "$components/Filter/Filter.styles";
import { Collapse, CollapsePanel } from "$components/Collapse/Collapse.styles";
import { CollapseArrowDown } from "svg/collapse-arrow-down";
import { Link as LinkIcon } from "svg/link";
import { Save } from "svg/save";
import Link from "next/link";
import MultiSearch from "$components/MultiSearch/MultiSearch";
import { useState } from "react";
import { getTransactions, LogEvent, Transaction } from "$utils/api";
import { useQueries } from "react-query";
import { TRANSACTION_TYPE } from "$utils/constant";
import {
  evaluateAmount,
  evaluateCollapseHeader,
  evaluateToken,
  mapToken,
} from "$utils/evaluate-transaction";
import {
  TransactionFilter,
  TransactionHeader,
  TransactionLogo,
  TransactionSearch,
  TransactionSkeleton,
} from "$components/Transactions/Transactions.styles";
import { Pagination, Skeleton } from "antd";
import Head from "next/head";
import { truncateAddress } from "$utils/functions";
interface TransactionsProps {
  query: {
    search?: string;
  };
}

const Transactions: NextPage<TransactionsProps> = ({
  query: { search = "" },
}) => {
  const [inputs, setInputs] = useState<string[]>(search.split(","));
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);
  const [tokenSelect, setTokenSelect] = useState<string>("Select Token");
  const [transactionSelect, setTransactionSelect] =
    useState<string>("Select Transaction");
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const transactionQueries = useQueries(
    inputs.map((input) => ({
      queryKey: ["transactions", input],
      queryFn: () => getTransactions(input),
    }))
  );

  const isLoading = transactionQueries.some(({ isLoading }) => isLoading);
  const mappedData = transactionQueries
    .reduce(
      (acc, val) => acc.concat(val?.data?.items ?? []),
      [] as Transaction[]
    )
    ?.map(({ log_events }) =>
      log_events
        .filter(
          ({ decoded }) =>
            decoded &&
            TRANSACTION_TYPE.includes(decoded?.name) &&
            decoded.params
              .map(({ value }) => value)
              .reduce((acc: string[], val) => acc.concat(val), [] as string[])
              .some((val) =>
                inputs
                  .map((input) => input.toLocaleLowerCase())
                  .includes(val.toLocaleLowerCase())
              )
        )
        .filter(({ block_signed_at }) =>
          fromDate && toDate
            ? block_signed_at >= fromDate && block_signed_at <= toDate
            : true
        )
        .filter(({ decoded }) =>
          transactionSelect === "Select Transaction"
            ? true
            : transactionSelect === decoded?.name
        )
        .filter(({ decoded }) =>
          tokenSelect === "Select Token"
            ? true
            : decoded?.params && tokenSelect === mapToken(decoded?.params)
        )
    );

  // reduce to flatten array
  const flattenData = mappedData?.reduce(
    (acc, val) => acc.concat(val),
    [] as LogEvent[]
  );
  console.log(flattenData);

  return (
    <div>
      <Head>
        <title>ONEAnalytics</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        contentJustify="stretch"
        headerChildren={
          <TransactionHeader justifyContent="space-between" alignItems="center">
            <Link href="/">
              <TransactionLogo as="a">
                <Image
                  alt=""
                  objectFit="contain"
                  layout="fill"
                  src="/logo.png"
                />
              </TransactionLogo>
            </Link>
            <TransactionSearch>
              <MultiSearch
                inputs={inputs}
                setInputs={setInputs}
                onSearch={() => console.log("ss")}
              />
            </TransactionSearch>
          </TransactionHeader>
        }
        search=""
      >
        <Filter alignItems="center" justifyContent="space-between">
          <TypographyFour>
            Token Transactions <br /> on addresses
          </TypographyFour>
          <TransactionFilter gap="14px" justifyContent="flex-start">
            <FlexibleDiv gap="12px" justifyContent="flex-start">
              <TypographyOne>From:</TypographyOne>
              <DatePicker
                onChange={(_, dateString) => setFromDate(dateString)}
                suffixIcon={<DateSVG />}
              />
            </FlexibleDiv>
            <FlexibleDiv gap="12px" justifyContent="flex-start">
              <TypographyOne>To:</TypographyOne>
              <DatePicker
                onChange={(_, dateString) => setToDate(dateString)}
                suffixIcon={<DateSVG />}
              />
            </FlexibleDiv>
            <Select
              options={[
                ...TRANSACTION_TYPE.map((item) => ({
                  value: item,
                  label: item,
                })),
                { value: "Select Transaction", label: "Select Transaction" },
              ]}
              value={transactionSelect}
              onChange={(e) => setTransactionSelect(e as string)}
              suffixIcon={<ArrowDown />}
              placeholder="Select Transaction"
            />
            <Select
              options={[
                { value: "HRC721", label: "HRC721" },
                { value: "HRC20", label: "HRC20" },
                { value: "HRC1155", label: "HRC1155" },
                { value: "Select Token", label: "Select Token" },
              ]}
              value={tokenSelect}
              onChange={(e) => setTokenSelect(e as string)}
              suffixIcon={<ArrowDown />}
              placeholder="Select token"
            />
          </TransactionFilter>
        </Filter>
        {isLoading ? (
          <FlexibleDiv flexDir="column" gap="30px" alignItems="stretch">
            {[1, 2, 4, 5].map((item) => (
              <TransactionSkeleton key={item} shape="square" active />
            ))}
          </FlexibleDiv>
        ) : (
          <>
            {flattenData.length ? (
              <Collapse
                expandIcon={({ isActive }) => (
                  <CollapseArrowDown
                    className="collapse-arrow-down"
                    style={{
                      transform: `translateY(-50%) rotate(${
                        isActive ? "180deg" : "0"
                      })`,
                    }}
                  />
                )}
                expandIconPosition="end"
              >
                {flattenData
                  ?.slice(pageSize * current - pageSize, pageSize * current)
                  .map((logEvent, i) => (
                    <CollapsePanel
                      header={
                        <FlexibleDiv gap="20px" justifyContent="space-between">
                          <FlexibleDiv
                            gap="24px"
                            justifyContent="flex-start"
                            alignItems="center"
                          >
                            {
                              evaluateCollapseHeader(inputs, logEvent.decoded)
                                ?.svg
                            }
                            <FlexibleDiv
                              flexDir="column"
                              gap="5px"
                              alignItems="flex-start"
                            >
                              <TypographyThree color="rgba(88, 165, 254, 0.87)">
                                #{truncateAddress(logEvent.tx_hash)}
                              </TypographyThree>
                              <TypographyTwo color="rgba(255, 255, 255, 0.67)">
                                {
                                  evaluateCollapseHeader(
                                    inputs,
                                    logEvent.decoded
                                  )?.name
                                }
                              </TypographyTwo>
                            </FlexibleDiv>
                          </FlexibleDiv>
                          <FlexibleDiv
                            gap="12px"
                            justifyContent="flex-start"
                            alignItems="center"
                            margin="0 50px 0 0"
                          >
                            <Link
                              href={`https://explorer.harmony.one/${logEvent.tx_hash}`}
                            >
                              <a target="_blank">
                                <LinkIcon className="transaction-icon" />
                              </a>
                            </Link>
                            <button
                              onClick={() => {
                                const csv = evaluateCollapseHeader(
                                  inputs,
                                  logEvent.decoded
                                )
                                  ?.csv?.reduce(
                                    (acc, value) => acc.concat(value),
                                    []
                                  )
                                  .join("\n");
                                const CSVFile =
                                  csv && new Blob([csv], { type: "text/csv" });
                                if (CSVFile) {
                                  // Create to temporary hidden link to initiate the download process
                                  const tempLink = document.createElement("a");
                                  tempLink.download = `logs.csv`;
                                  const url =
                                    window.URL.createObjectURL(CSVFile);
                                  tempLink.href = url;
                                  tempLink.style.display = "none";
                                  document.body.appendChild(tempLink);
                                  //automatically click to trigger download
                                  tempLink.click();
                                  document.body.removeChild(tempLink);
                                }
                              }}
                            >
                              <Save className="transaction-icon" />
                            </button>
                          </FlexibleDiv>
                        </FlexibleDiv>
                      }
                      key={i}
                    >
                      <div className="collapse-divider"></div>
                      <FlexibleDiv
                        margin="0 0 24px 0"
                        justifyContent="space-between"
                      >
                        <TypographyThree color="rgba(255, 255, 255, 0.47)">
                          Token
                        </TypographyThree>
                        {logEvent.decoded
                          ? evaluateToken(logEvent.decoded?.params)
                          : null}
                      </FlexibleDiv>
                      <div className="collapse-divider"></div>
                      {evaluateAmount(logEvent)}
                      <div className="collapse-divider"></div>

                      {
                        evaluateCollapseHeader(inputs, logEvent.decoded)
                          ?.details
                      }
                      <FlexibleDiv
                        margin="0 0 24px 0"
                        justifyContent="space-between"
                      >
                        <TypographyThree color="rgba(255, 255, 255, 0.47)">
                          Timestamp
                        </TypographyThree>
                        <TypographyThree color="rgba(255, 255, 255, 0.67)">
                          {`${logEvent.block_signed_at.substring(
                            0,
                            10
                          )} ${logEvent.block_signed_at.substring(11, 16)}`}
                        </TypographyThree>
                      </FlexibleDiv>
                    </CollapsePanel>
                  ))}
              </Collapse>
            ) : (
              <TypographyThree textAlign="center">
                No transaction history for wallet address(es)
              </TypographyThree>
            )}
            <FlexibleDiv>
              {flattenData?.length ? (
                <Pagination
                  showSizeChanger
                  pageSize={pageSize}
                  onChange={(page) => setCurrent(page)}
                  onShowSizeChange={(current, pageSize) => {
                    setCurrent(current);
                    setPageSize(pageSize);
                  }}
                  total={flattenData?.length}
                />
              ) : null}
            </FlexibleDiv>
          </>
        )}
      </Layout>
    </div>
  );
};

export default Transactions;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};
