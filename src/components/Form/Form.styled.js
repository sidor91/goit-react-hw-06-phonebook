import styled from 'styled-components';
import { Form, Field } from './Form'

export const FormElement = styled(Form)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;
export const Label = styled.label`
display: flex;
font-size: 16px;
max-width: 400px;

`;

export const LabelName = styled.span`
  width: 100px;
  margin-right: 10px;
`;

export const InputField = styled(Field)`
  width: 100%;
`;
export const Submit = styled.button`
  margin-top: 10px;
  display: inline-block;
  width: 100px;
`;