import { InputProps } from './InputProps';
import * as Styled from './styles';

export const Input = ({ ...rest }: InputProps) => {
  return <Styled.Container {...rest}></Styled.Container>;
};
