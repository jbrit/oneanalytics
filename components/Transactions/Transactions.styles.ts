import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import { Skeleton } from "antd";
import styled from "styled-components";

export const TransactionHeader = styled(FlexibleDiv)`
  gap: 12px;
  flex-direction: column;
  @media screen and (${BREAKPOINTS.md}) {
    flex-direction: row;
  }
`;

export const TransactionLogo = styled.p`
  position: relative;
  width: 140px;
  height: 41px;
  @media screen and (${BREAKPOINTS.lg}) {
    width: 240px;
    height: 51px;
  }
`;

export const TransactionSearch = styled.div`
  width: 100%;
  @media screen and (${BREAKPOINTS.md}) {
    width: 80%;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 60%;
  }
`;

export const TransactionFilter = styled(FlexibleDiv)`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  @media screen and (${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: center;
    margin-top: 0;
  }
`;

export const TransactionSkeleton = styled(Skeleton.Avatar)`
  width: 100%;
  height: 80px;
  .ant-skeleton-avatar {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: #11161d;
  }
`;
