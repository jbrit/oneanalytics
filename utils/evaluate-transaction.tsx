import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { TokenTag } from "$components/TokenTag/TokenTag.styles";
import TransactionAddress from "$components/TransactionAddress/TransactionAddress";
import { TypographyThree } from "$components/Typography/Typography.styles";
import { FC } from "react";
import { Approval } from "svg/approval";
import { TransferIn } from "svg/transfer-in";
import { TransferOut } from "svg/transfer-out";
import { LogEvent } from "./api";
import { HarmonyEvent, UnknownEvent } from "./api-events";
import { truncateAddress } from "./functions";

export const mapToken = (params: Exclude<HarmonyEvent, null>["params"]) => {
  if (params[params.length - 1]?.name.includes("value")) {
    return "HRC20";
  } else if (params[params.length - 1]?.name.includes("tokenId")) {
    return "HRC721";
  } else {
    return "HRC1155";
  }
};

export const evaluateToken = (
  params: Exclude<HarmonyEvent, null>["params"]
) => {
  if (params[params.length - 1]?.name.includes("value")) {
    return (
      <TokenTag
        color="rgba(210, 184, 45, 0.87)"
        bgColor="rgba(210, 184, 45, 0.1)"
      >
        HRC20
      </TokenTag>
    );
  } else if (params[params.length - 1]?.name.includes("tokenId")) {
    return (
      <TokenTag
        color="rgba(194, 75, 75, 0.87)"
        bgColor="rgba(194, 75, 75, 0.1)"
      >
        HRC721
      </TokenTag>
    );
  } else {
    return (
      <TokenTag
        color="rgba(6, 203, 153, 0.87)"
        bgColor="rgba(6, 203, 153, 0.1)"
      >
        HRC1155
      </TokenTag>
    );
  }
};

export const evaluateCollapseHeader = (
  _addresses: string[],
  decoded?: HarmonyEvent
) => {
  const addresses = _addresses.map((input) => input.toLocaleLowerCase());
  if (decoded) {
    if (decoded?.name === "Transfer") {
      const csvHeader = [
        "Name",
        "Sender's Address",
        "Receiver's Address",
        "Token",
      ];
      if (addresses.includes(decoded?.params[0].value)) {
        return {
          svg: <TransferOut className="transaction-icon" />,
          name: `Transfer Out from ${truncateAddress(
            decoded?.params[0].value.toLocaleLowerCase()
          )}`,
          details: (
            <TransactionAddress
              fromTitle="Sender’s Address"
              toTitle="Receiver’s Address"
              to={decoded?.params[1].value}
              from={decoded?.params[0].value}
            />
          ),
          csv: [
            csvHeader,
            [
              `Transfer Into ${truncateAddress(
                decoded?.params[1].value.toLocaleLowerCase()
              )}`,
              decoded?.params[0].value,
              decoded?.params[1].value,
              mapToken(decoded?.params),
            ],
          ],
        };
      }
      if (addresses.includes(decoded?.params[1].value.toLocaleLowerCase())) {
        return {
          svg: <TransferIn className="transaction-icon" />,
          name: `Transfer Into ${truncateAddress(decoded?.params[1].value)}`,
          details: (
            <TransactionAddress
              fromTitle="Sender’s Address"
              toTitle="Receiver’s Address"
              to={decoded?.params[1].value}
              from={decoded?.params[0].value}
            />
          ),
          csv: [
            csvHeader,
            [
              `Transfer Into ${truncateAddress(decoded?.params[0].value)}`,
              decoded?.params[0].value,
              decoded?.params[1].value,
              mapToken(decoded?.params),
            ],
          ],
        };
      }
    }
    if (
      decoded?.name === "TransferSingle" ||
      decoded?.name === "TransferBatch"
    ) {
      const csvHeader = [
        "Name",
        "Sender's Address",
        "Receiver's Address",
        "Token",
      ];
      if (addresses.includes(decoded?.params[2].value.toLocaleLowerCase())) {
        return {
          svg: <TransferIn className="transaction-icon" />,
          name: `Transfer Into ${truncateAddress(decoded?.params[2].value)}`,
          details: (
            <TransactionAddress
              to={decoded?.params[2].value}
              from={decoded?.params[1].value}
              fromTitle="Sender’s Address"
              toTitle="Receiver’s Address"
            />
          ),
          csv: [
            csvHeader,
            [
              `Transfer Into ${truncateAddress(decoded?.params[2].value)}`,
              decoded?.params[1].value,
              decoded?.params[2].value,
              mapToken(decoded?.params),
            ],
          ],
        };
      }
      if (addresses.includes(decoded?.params[1].value.toLocaleLowerCase())) {
        return {
          svg: <TransferOut className="transaction-icon" />,
          name: `Transfer Out from ${truncateAddress(
            decoded?.params[1].value
          )}`,
          details: (
            <TransactionAddress
              to={decoded?.params[2].value}
              from={decoded?.params[1].value}
              fromTitle="Sender’s Address"
              toTitle="Receiver’s Address"
            />
          ),
          csv: [
            csvHeader,
            [
              `Transfer Out from ${truncateAddress(decoded?.params[1].value)}`,
              decoded?.params[1].value,
              decoded?.params[2].value,
              mapToken(decoded?.params),
            ],
          ],
        };
      }
    }
    if (decoded?.name === "Approval") {
      const csvHeader = ["Name", "Approved By", "Approved for", "Token"];
      return {
        svg: <Approval className="transaction-icon" />,
        name: `Approved by ${truncateAddress(decoded?.params[0].value)}`,
        details: (
          <TransactionAddress
            to={decoded?.params[1].value}
            from={decoded?.params[0].value}
            fromTitle="Approved By"
            toTitle="Approved for"
          />
        ),
        csv: [
          csvHeader,
          [
            `Approved by ${truncateAddress(decoded?.params[0].value)}`,
            decoded?.params[1].value,
            decoded?.params[0].value,
            mapToken(decoded?.params),
          ],
        ],
      };
    }
  }
  return null;
};

export const evaluateAmount = (logEvent: LogEvent) => {
  const params = logEvent.decoded?.params;
  const decimal = logEvent?.sender_contract_decimals;
  const symbol = logEvent?.sender_contract_ticker_symbol;
  if (params && params[params.length - 1]?.name.includes("value")) {
    return (
      <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
        <TypographyThree color="rgba(255, 255, 255, 0.47)">
          Amount
        </TypographyThree>
        <TypographyThree color="rgba(255, 255, 255, 0.67)">
          {parseInt(`${params[params.length - 1].value}`) /
            Math.pow(10, decimal)}{" "}
          {symbol}
        </TypographyThree>
      </FlexibleDiv>
    );
  }
  if (params && params[params.length - 1]?.name.includes("tokenId")) {
    return (
      <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
        <TypographyThree color="rgba(255, 255, 255, 0.47)">
          Item ID
        </TypographyThree>
        <TypographyThree color="rgba(255, 255, 255, 0.67)">
          {symbol}#{params[params.length - 1].value}
        </TypographyThree>
      </FlexibleDiv>
    );
  }
  if (params && params[params.length - 1]?.name.includes("amounts")) {
    return (
      <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
        <TypographyThree color="rgba(255, 255, 255, 0.47)">
          Amount
        </TypographyThree>
        <TypographyThree color="rgba(255, 255, 255, 0.67)">
          <FlexibleDiv as="span" gap="4px">
            {parseInt(`${params[params.length - 1].value[0]}`) /
              Math.pow(10, decimal)}{" "}
            {symbol}
          </FlexibleDiv>
        </TypographyThree>
      </FlexibleDiv>
    );
  }
  if (params && params[params.length - 1]?.name.includes("amount")) {
    return (
      <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
        <TypographyThree color="rgba(255, 255, 255, 0.47)">
          Amount
        </TypographyThree>
        <TypographyThree color="rgba(255, 255, 255, 0.67)">
          {parseInt(`${params[params.length - 1].value}`) /
            Math.pow(10, decimal)}{" "}
          {symbol}
        </TypographyThree>
      </FlexibleDiv>
    );
  }
  // else if (params[params.length - 1]?.name.includes("tokenId")) {
  //   return (
  //     <TokenTag
  //       color="rgba(194, 75, 75, 0.87)"
  //       bgColor="rgba(194, 75, 75, 0.1)"
  //     >
  //       HRC721
  //     </TokenTag>
  //   );
  // } else {
  //   return (
  //     <TokenTag
  //       color="rgba(6, 203, 153, 0.87)"
  //       bgColor="rgba(6, 203, 153, 0.1)"
  //     >
  //       HRC1155
  //     </TokenTag>
  //   );
  // }
};
