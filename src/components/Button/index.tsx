import { ButtonProps } from './ButtonProps';
import * as Styled from './styles';

export const Button = ({ title, type = 'PRIMARY', ...rest }: ButtonProps) => {
  return (
    <Styled.Container type={type} {...rest}>
      <Styled.Text>{title}</Styled.Text>
    </Styled.Container>
  );
};
