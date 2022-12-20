import { useTheme } from 'styled-components/native';
import { InputProps } from './InputProps';
import * as Styled from './styles';

export const Input = ({ inputRef, ...rest }: InputProps) => {
  const { COLORS } = useTheme();
  return <Styled.Container ref={inputRef} {...rest} placeholderTextColor={COLORS.GRAY_300}></Styled.Container>;
};
