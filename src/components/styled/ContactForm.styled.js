import styled from "@emotion/styled";

export const Form = styled.form`
  display: inline-flex;
  width: 500px;
  flex-direction: column;
  line-height: 1.4;
  font-family: "Poppins", sans-serif;
  box-shadow: ${(props) =>
    `1px 1px 2px 3px ${props.theme.colors.lightSkyBlue}`};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${(props) => props.theme.spacing(5)};
`;

export const FormModal = styled.form`
  display: inline-flex;
  width: 500px;
  background-color: #b0e0e6;
  flex-direction: column;
  line-height: 1.4;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: ${(props) => props.theme.spacing(3)};
`;
