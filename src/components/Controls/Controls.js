import React, {useEffect} from 'react';
import Search from "../Search/Search";
import {Container} from "../Container/Container";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {setSearch} from "../../store/countriesSlice/countriesSlice";
import {CustomSelect} from "../CustomSelect/CustomSelect";
import {setRegion} from "../../store/countriesSlice/countriesSlice";

const options = [
    {value: "Africa", label: "Africa"},
    {value: "America", label: "America"},
    {value: "Asia", label: "Asia"},
    {value: "Europe", label: "Europe"},
    {value: "Oceania", label: "Oceania"},
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;


  @media (min-width: 767px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

const Controls = ({onSearch}) => {
    const dispatch = useDispatch();
    const {search, region} = useSelector(state => state.countries);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const regionValue = region?.value || "";
            onSearch(search, regionValue);
        }, 300);

        return () => clearTimeout(timeout);

    }, [search, region]);

    return (
      <Wrapper>
          <Search value={search} setSearch={setSearch}/>
          <CustomSelect options={options}
                        placeholder="Filter by region"
                        isClearable
                        isSearchable={false}
                        value={region}
                        onChange={(e) => dispatch(setRegion({region: e}))}/>
      </Wrapper>
    );
};

export default Controls;
