import React, {useEffect} from 'react';
import {Container} from "../Container/Container";
import styled from "styled-components";
import {IoMoonOutline, IoMoon} from "react-icons/io5";
import {setTheme} from "../../store/countriesSlice/countriesSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const HeaderEl = styled.header`
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.7rem 0px;
`;

const Title = styled(Link).attrs({to: "/"})`
  text-decoration: none;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

const ThemeMode = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  font-size: var(--fs-sm);
`;

const Header = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.countries);

    const toggleTheme = () => {
        dispatch(setTheme(theme === "light" ? {theme: "dark"} : {theme: "light"}));
    };

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
      <HeaderEl>
          <Container>
              <Wrapper>
                  <Title>Where in the world?</Title>
                  <ThemeMode onClick={toggleTheme}>
                      {theme === "light" ? <IoMoonOutline size={"14px"}/> : <IoMoon size={"14px"}/>}
                      <span style={{marginLeft: ".7rem"}}>{theme} Mode</span>
                  </ThemeMode>
              </Wrapper>
          </Container>
      </HeaderEl>
    );
};

export default Header;
