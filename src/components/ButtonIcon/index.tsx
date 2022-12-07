import { ButtonIconProps } from './ButtonIconProps';
import * as Styled from './styles';

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest }: ButtonIconProps) => {
  return (
    <Styled.Container {...rest}>
      <Styled.Icon name={icon} type={type} />
    </Styled.Container>
  );
};
