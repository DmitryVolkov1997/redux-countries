import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: .5rem 2rem;
  text-align: center;
  font-family: var(--family);
  font-size: var(--fs-sm);
  color: var(--colors-text);
  border: none;
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
  border-radius: var(--radius);
  cursor: pointer;
  margin: ${props => props.margin};
`;

export default Button;