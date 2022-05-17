import React from 'react';
import styled from "styled-components";
import {IoSearch} from "react-icons/io5";
import {setSearch} from "../../store/countriesSlice/countriesSlice";
import {useDispatch} from "react-redux";

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country..."
})`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 1rem;
  color: var(--colors-text);
`;

const Search = ({search, setSearch}) => {
    const dispatch = useDispatch();

    return (
      <InputContainer>
          <IoSearch/>
          <Input value={search} onChange={(e) => dispatch(setSearch({search: e.target.value}))}/>
      </InputContainer>
    );
};

export default Search;
