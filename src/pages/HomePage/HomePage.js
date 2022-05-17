import {useDispatch, useSelector} from "react-redux";
import {ALL_COUNTRIES} from "../../config";
import Card from "../../components/List/Card/Card";
import Controls from "../../components/Controls/Controls";
import React, {useEffect} from "react";
import axios from "axios";
import List from "../../components/List/List";
import {useNavigate} from 'react-router-dom';
import {setFilterCountries} from "../../store/countriesSlice/countriesSlice";

const HomePage = ({countries, setCountries}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {filterCountries} = useSelector(state => state.countries);

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((country) => country.region.includes(region));
        }

        if (search) {
            data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
        }
        dispatch(setFilterCountries({data}));
    };

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES)
            .then(data => dispatch(setCountries({data: data.data})));
        }
    }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);


    return (
      <>
          <Controls onSearch={handleSearch}/>
          <List>
              {
                  filterCountries.length ? filterCountries.map((country) => {
                      const countryInfo = {
                          name: country.name,
                          img: country.flags.png,
                          info: [
                              {
                                  title: "Population",
                                  description: country.population
                              },
                              {
                                  title: "Region",
                                  description: country.region
                              },
                              {
                                  title: "Capital",
                                  description: country.capital
                              }
                          ]
                      };
                      return <Card key={country.name} {...countryInfo}
                                   onClick={() => navigate(`/country/${country.name}`)}/>;
                  }) : null
              }
          </List>
      </>
    );
};

export default HomePage;
