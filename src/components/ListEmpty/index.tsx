import { ListEmptyProps } from './ListEmptyProps';
import * as Styled from './styles';

export const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <Styled.Container>
      <Styled.Message>{message}</Styled.Message>
    </Styled.Container>
  );
};
