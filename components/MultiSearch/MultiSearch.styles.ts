import styled from "styled-components";

export const StyledMultiSearch = styled.div`
  background: #11161d;
  border: 2px solid #343942;
  border-radius: 15px;
  padding: 15px 21px;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  position: relative;
  input {
    background: transparent;
    height: 100%;
    position: relative;
    z-index: 10;
    width: auto;
    border: 0;
    outline: 0;
    font-size: 1.8rem;
    line-height: 3.1rem;
    color: rgba(255, 255, 255, 0.47);
    flex-grow: 1;
  }
`;

export const StyledMultiSearchTagContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  flex-wrap: nowrap;
`;

export const StyledMultiSearchTag = styled.div`
  padding: 7px 14px;
  min-height: fit-content;
  background: rgba(116, 142, 178, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
