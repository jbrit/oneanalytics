import { TypographyOne } from "$components/Typography/Typography.styles";
import { truncateAddress } from "$utils/functions";
import { FC, useState } from "react";
import { Close } from "svg/close";
import { Search } from "svg/search";
import {
  StyledMultiSearch,
  StyledMultiSearchTag,
  StyledMultiSearchTagContainer,
} from "./MultiSearch.styles";
import { IMultiSearchProps } from "./MultiSearch.types";

const MultiSearch: FC<IMultiSearchProps> = ({
  inputs,
  onSearch,
  setInputs,
}) => {
  const [input, setInput] = useState<string>("");
  return (
    <StyledMultiSearch>
      <StyledMultiSearchTagContainer>
        {inputs
          .filter((input) => input.trim().length > 0)
          .map((item) => (
            <StyledMultiSearchTag key={item}>
              <TypographyOne color="rgba(116, 142, 178, 0.87)">
                {truncateAddress(item)}
              </TypographyOne>
              <button
                onClick={() =>
                  setInputs((prevInputs) =>
                    prevInputs.filter((_item) => _item !== item)
                  )
                }
              >
                <Close />
              </button>
            </StyledMultiSearchTag>
          ))}
        <input
          placeholder="Search for hash, transaction, or addresses"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setInputs((prevInputs) => [...prevInputs, input]);
              setInput("");
            }
          }}
        />
      </StyledMultiSearchTagContainer>
      <button onClick={() => onSearch()}>
        <Search />
      </button>
    </StyledMultiSearch>
  );
};

export default MultiSearch;
