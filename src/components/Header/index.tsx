import * as Styled from './styles';
import logoImg from '@assets/logo.png';
import { HeaderProps } from './HeaderProps';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ showBackButton }: HeaderProps) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate('groups');
  };

  return (
    <Styled.Container>
      {showBackButton && (
        <>
          <Styled.BackButton onPress={handleGoBack}>
            <Styled.BackIcon />
          </Styled.BackButton>
        </>
      )}
      <Styled.Logo source={logoImg} />
    </Styled.Container>
  );
};
