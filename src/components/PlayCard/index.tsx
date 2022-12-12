import { ButtonIcon } from '@components/ButtonIcon';
import { PlayCardProps } from './PlayCardProps';
import * as Styled from './styles';

export const PlayCard = ({ name, onRemove }: PlayCardProps) => {
  return (
    <Styled.Container>
      <Styled.Icon name="person" />
      <Styled.Name>{name}</Styled.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Styled.Container>
  );
};
