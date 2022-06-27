import styled from "styled-components";

const SButton = styled.button`
  background: #fdc931;
  padding: 10px;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
`;

function Button(props) {
  return <SButton {...props} />;
}

export default Button;
