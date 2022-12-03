import * as Styled from './styles';
import logoImg from '@assets/logo.png';
import { HeaderProps } from './HeaderProps';

export const Header = ({ showBackButton }: HeaderProps) => {
  return (
    <Styled.Container>
      {showBackButton && (
        <>
          <Styled.BackButton>
            <Styled.BackIcon />
          </Styled.BackButton>
        </>
      )}
      <Styled.Logo source={logoImg} />
    </Styled.Container>
  );
};
