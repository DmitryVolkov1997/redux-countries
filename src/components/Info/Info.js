import {useEffect} from "react";
import {filterByCode} from "../../config";
import styled from "styled-components";
import axios from "axios";
import {setNeighbors} from "../../store/countriesSlice/countriesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    width: 100%;
    flex-direction: row;
  }
`;

const Box = styled.div`
  width: 100%;

  @media (min-width: 767px) {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const BoxImg = styled.div`
  width: 100%;
`;

const InfoImg = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 1.5rem 0 1rem;
  font-size: 22px;

  @media (min-width: 767px) {
    margin: 0 0 1rem;
  }
`;

const GroupList = styled.div`
  @media (min-width: 767px) {
    display: flex;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;

  @media (min-width: 767px) {
    margin: 0 3rem 0rem 0;
  }
`;

const ListItem = styled.li`
  font-family: var(--family);
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  margin-bottom: .7rem;

  &:last-child {
    margin-bottom: 0;
  }

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
`;

const Tag = styled.div`
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  padding: .5rem 2rem;
  border-radius: var(--radius);
  cursor: pointer;
`;

const Info = (props) => {
    const {
        name, flag,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders = []
    } = props;

    const dispatch = useDispatch();
    const {neighbors} = useSelector(state => state.countries);
    const navigate = useNavigate();

    useEffect(() => {
        if (!borders.length) return;
        axios.get(filterByCode(borders))
        .then(({data}) => dispatch(setNeighbors({data})));
    }, [borders]);

    return (
      <Wrapper>
          <BoxImg>
              <InfoImg src={flag}/>
          </BoxImg>
          <Box>
              <InfoTitle>{name}</InfoTitle>
              <GroupList>
                  <List>
                      <ListItem>
                          <b>Native Name: </b>{nativeName}
                      </ListItem>
                      <ListItem>
                          <b>Population: </b>{population}
                      </ListItem>
                      <ListItem>
                          <b>Region: </b>{region}
                      </ListItem>
                      <ListItem>
                          <b>Sub Region: </b>{subregion}
                      </ListItem>
                      <ListItem>
                          <b>Capital: </b>{capital}
                      </ListItem>
                  </List>
                  <List>
                      <ListItem>
                          <b>Top Level Domain: </b>{topLevelDomain.map(domain => (
                        <span key={domain}>{domain}</span>
                      ))}
                      </ListItem>
                      <ListItem>
                          <b>
                              Currencies: </b>{
                          currencies.map(el =>
                            (<span key={el.code}>{el.code}</span>)
                          )}
                      </ListItem>
                      <ListItem>
                          <b>Languages: </b>{languages.map(el => (
                        <span key={el.name}>{el.name}</span>
                      ))}
                      </ListItem>
                  </List>
              </GroupList>
              <Meta>
                  <b>Border Countries:</b>
                  <TagGroup>
                      {!neighbors.length ? <p>There is no border countries</p> : neighbors.map(border => (
                        <Tag key={border.name} onClick={() => navigate(`/country/${border.name}`)}>{border.name}</Tag>
                      ))}
                  </TagGroup>
              </Meta>
          </Box>
      </Wrapper>
    );
};

export default Info;
