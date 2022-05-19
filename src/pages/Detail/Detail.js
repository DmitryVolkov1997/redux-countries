import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import {IoArrowBackOutline} from 'react-icons/io5';
import Info from "../../components/Info/Info";
import {searchByCountry} from "../../config";
import {setCountry} from "../../store/countriesSlice/countriesSlice";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div``;

const Detail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {country} = useSelector(state => state.countries);

    useEffect(() => {
        axios.get(searchByCountry(name))
        .then(({data}) => dispatch(setCountry({data})));
    }, [name]);

    return (
      <Wrapper>
          <Button margin={"0 0 3.3rem 0"} onClick={() => navigate(-1)}>
              <IoArrowBackOutline size={20} style={{marginRight: ".5rem"}}/>
              Back
          </Button>
          {
              country ? country.map((el) => {
                  return <Info key={el.name} {...el}/>;
              }) : null
          }
      </Wrapper>
    );
};

export default Detail;
