import * as Styled from './styles';
import logoImg from '@assets/logo.png';

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.Logo source={logoImg} />
    </Styled.Container>
  );
};
