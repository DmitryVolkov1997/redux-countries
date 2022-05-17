import React from "react";
import Header from "../Header/Header";
import {Main} from "../Main/Main";
import HomePage from "../../pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import Detail from "../../pages/Detail/Detail";
import {useSelector} from "react-redux";
import {setCountries} from "../../store/countriesSlice/countriesSlice";


function App() {
    const {countries} = useSelector(state => state.countries);

    return (
      <>
          <Header/>
          <Main>
              <Routes>
                  <Route index element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                  <Route path="/country/:name" element={<Detail/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Main>
      </>
    );
}

export default App;
