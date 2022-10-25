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
import Head from "next/head";
import Image from "next/image";
import { ArrowDown } from "svg/arrow-down";
import { Date } from "svg/date";
import { Filter } from "$components/Filter/Filter.styles";
import { Collapse, CollapsePanel } from "$components/Collapse/Collapse.styles";
import { CollapseArrowDown } from "svg/collapse-arrow-down";
import { TransferIn } from "svg/transfer-in";
import { TransferOut } from "svg/transfer-out";
import { TokenTag } from "$components/TokenTag/TokenTag.styles";
import { Link as LinkIcon } from "svg/link";
import { Save } from "svg/save";
import Link from "next/link";
import MultiSearch from "$components/MultiSearch/MultiSearch";
import { useState } from "react";
import { getTransactions } from "$utils/api";
import { useQuery } from "react-query";
import { TRANSACTION_TYPE } from "$utils/constant";

interface TransactionsProps {
  query: {
    search?: string;
  };
}

const Transactions: NextPage<TransactionsProps> = ({
  query: { search = "" },
}) => {
  const [inputs, setInputs] = useState<string[]>(search.split(","));

  const { data, isLoading } = useQuery(
    ["transactions", "0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965"],
    () => getTransactions("0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965")
  );

  const mappedData = data?.items.map(({ log_events }) =>
    log_events.filter(({ decoded }) => TRANSACTION_TYPE.includes(decoded?.name))
  );

  console.log(mappedData);

  return (
    <Layout
      headerChildren={
        <FlexibleDiv justifyContent="space-betweeen" alignItems="center">
          <Image
            width={288}
            height={51}
            alt=""
            objectFit="cover"
            // layout="responsive"
            src="/logo.png"
          />
          <MultiSearch
            inputs={inputs}
            setInputs={setInputs}
            onSearch={() => console.log("ss")}
          />
        </FlexibleDiv>
      }
      search=""
    >
      <Filter alignItems="center" justifyContent="space-between">
        <TypographyFour>
          Token Transactions <br /> on addresses
        </TypographyFour>
        <FlexibleDiv gap="14px" justifyContent="flex-start">
          <FlexibleDiv gap="12px" justifyContent="flex-start">
            <TypographyOne>From:</TypographyOne>
            <DatePicker suffixIcon={<Date />} />
          </FlexibleDiv>
          <FlexibleDiv gap="12px" justifyContent="flex-start">
            <TypographyOne>To:</TypographyOne>
            <DatePicker suffixIcon={<Date />} />
          </FlexibleDiv>
          <Select suffixIcon={<ArrowDown />} placeholder="Burnt" />
          <Select suffixIcon={<ArrowDown />} placeholder="HRC721" />
        </FlexibleDiv>
      </Filter>
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
        <CollapsePanel
          header={
            <FlexibleDiv
              gap="24px"
              justifyContent="flex-start"
              alignItems="center"
            >
              <TransferIn className="transaction-icon" />
              <FlexibleDiv flexDir="column" gap="5px" alignItems="flex-start">
                <TypographyThree color="rgba(88, 165, 254, 0.87)">
                  #7410760223
                </TypographyThree>
                <TypographyTwo color="rgba(255, 255, 255, 0.67)">
                  Transfer Into 085c52a...e3a03aec
                </TypographyTwo>
              </FlexibleDiv>
            </FlexibleDiv>
          }
          key="1"
        >
          <div className="collapse-divider"></div>
        </CollapsePanel>
        <CollapsePanel
          header={
            <FlexibleDiv gap="20px" justifyContent="space-between">
              <FlexibleDiv
                gap="24px"
                justifyContent="flex-start"
                alignItems="center"
              >
                <TransferOut className="transaction-icon" />
                <FlexibleDiv flexDir="column" gap="5px" alignItems="flex-start">
                  <TypographyThree color="rgba(88, 165, 254, 0.87)">
                    #7410760223
                  </TypographyThree>
                  <TypographyTwo color="rgba(255, 255, 255, 0.67)">
                    Transfer Out from 085c52a...e3a03aec
                  </TypographyTwo>
                </FlexibleDiv>
              </FlexibleDiv>
              <FlexibleDiv
                gap="12px"
                justifyContent="flex-start"
                alignItems="center"
                margin="0 50px 0 0"
              >
                <Link href="/">
                  <a>
                    <LinkIcon className="transaction-icon" />
                  </a>
                </Link>
                <button>
                  <Save className="transaction-icon" />
                </button>
              </FlexibleDiv>
            </FlexibleDiv>
          }
          key="2"
        >
          <div className="collapse-divider"></div>
          <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
            <TypographyThree color="rgba(255, 255, 255, 0.47)">
              Token
            </TypographyThree>
            <TokenTag
              color="rgba(210, 184, 45, 0.87)"
              bgColor="rgba(210, 184, 45, 0.1)"
            >
              HRC20
            </TokenTag>
          </FlexibleDiv>
          <div className="collapse-divider"></div>
          <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
            <TypographyThree color="rgba(255, 255, 255, 0.47)">
              Amount
            </TypographyThree>
            <TypographyThree color="rgba(255, 255, 255, 0.67)">
              0.0003 BTC
            </TypographyThree>
          </FlexibleDiv>
          <div className="collapse-divider"></div>
          <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
            <TypographyThree color="rgba(255, 255, 255, 0.47)">
              Sender’s Address
            </TypographyThree>
            <TypographyThree color="#58A5FE">
              0ex5f085c52a84c3449f2e4641d7476767e3a03246
            </TypographyThree>
          </FlexibleDiv>
          <div className="collapse-divider"></div>
          <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
            <TypographyThree color="rgba(255, 255, 255, 0.47)">
              Receiver’s Address
            </TypographyThree>
            <TypographyThree color="#58A5FE">
              0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965
            </TypographyThree>
          </FlexibleDiv>
          <div className="collapse-divider"></div>
          <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
            <TypographyThree color="rgba(255, 255, 255, 0.47)">
              Timestamp
            </TypographyThree>
            <TypographyThree color="rgba(255, 255, 255, 0.67)">
              2022-10-18 11:45
            </TypographyThree>
          </FlexibleDiv>
        </CollapsePanel>
      </Collapse>
    </Layout>
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
