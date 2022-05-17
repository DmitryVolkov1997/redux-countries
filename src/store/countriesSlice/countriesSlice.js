import {createSlice} from "@reduxjs/toolkit";

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        theme: "light",
        search: "",
        region: "",
        countries: [],
        filterCountries: ""
    },
    reducers: {
        setTheme(state, {payload}) {
            state.theme = payload.theme;
        },
        setSearch(state, {payload}) {
            state.search = payload.search;
        },
        setRegion(state, {payload}) {
            state.region = payload.region;
        },
        setCountries(state, {payload}) {
            state.countries = payload.data;
            state.filterCountries = payload.data;
        },
        setFilterCountries(state, {payload}) {
            state.filterCountries = payload.data;
        }
    }
});

export const {setTheme, setSearch, setRegion, setCountries, setFilterCountries} = countriesSlice.actions;
export default countriesSlice.reducer;