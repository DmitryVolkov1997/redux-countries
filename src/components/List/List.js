import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0px;
  
  @media(min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    padding: 4rem 0px;
  }
`;

const List = ({children}) => {
    return (
      <Wrapper>
          {children}
      </Wrapper>
    );
};

export default List;
