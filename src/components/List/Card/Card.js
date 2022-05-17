import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (min-width: 767px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    max-width: 280px;
  }
`;

const CardImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 150px;
  display: block;
`;

const CardBody = styled.div`
  padding: 0rem 1rem 2rem;
`;

const CardTitle = styled.h3`
  font-size: var(--fs-md);
  color: var(--colors-text);
  font-weight: var(--fw-bold);
  margin: 1rem 0 .7rem 0;
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  color: var(--colors-text);
  margin-bottom: .3rem;

  & > b {
    font-weight: var(--fw-bold);
  }
`;


const Card = ({img, name, info = [], onClick}) => {
    return (
      <Wrapper onClick={onClick}>
          <CardImg src={img}/>
          <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardList>
                  {
                      info.map((el) => {
                          return (
                            <CardListItem key={el.title}>
                                <b>{el.title}</b>: {el.description}
                            </CardListItem>
                          );
                      })
                  }
              </CardList>
          </CardBody>
      </Wrapper>
    );
};

export default Card;
