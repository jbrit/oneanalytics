import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { TypographyThree } from "$components/Typography/Typography.styles";
import { FC } from "react";
import { ITransactionAddressProps } from "./TransactionAddress.types";

const TransactionAddress: FC<ITransactionAddressProps> = ({
  from,
  fromTitle,
  to,
  toTitle,
}) => (
  <>
    <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
      <TypographyThree color="rgba(255, 255, 255, 0.47)">
        {fromTitle}
      </TypographyThree>
      <TypographyThree
        as="a"
        target="_blank"
        href={`https://explorer.harmony.one/address/${from}`}
        color="#58A5FE"
      >
        {from}
      </TypographyThree>
    </FlexibleDiv>
    <div className="collapse-divider"></div>
    <FlexibleDiv margin="0 0 24px 0" justifyContent="space-between">
      <TypographyThree color="rgba(255, 255, 255, 0.47)">
        {toTitle}
      </TypographyThree>
      <TypographyThree
        as="a"
        target="_blank"
        href={`https://explorer.harmony.one/address/${to}`}
        color="#58A5FE"
      >
        {to}
      </TypographyThree>
    </FlexibleDiv>
    <div className="collapse-divider"></div>
  </>
);

export default TransactionAddress;
