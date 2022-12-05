import { useTheme } from 'styled-components/native';
import { InputProps } from './InputProps';
import * as Styled from './styles';

export const Input = ({ ...rest }: InputProps) => {
  const { COLORS } = useTheme();
  return <Styled.Container {...rest} placeholderTextColor={COLORS.GRAY_300}></Styled.Container>;
};
