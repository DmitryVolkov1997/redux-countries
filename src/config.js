const BASE_URL = "https://restcountries.com/v2/";

const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

const searchByCountry = (name) => `${BASE_URL}name/${name}`;

const filterByCode = (code) => `${BASE_URL}alpha?codes=${code.join(",")}`;

export {ALL_COUNTRIES, searchByCountry, filterByCode};