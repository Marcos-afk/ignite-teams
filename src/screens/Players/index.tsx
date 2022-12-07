import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import * as Styled from './styles';

export const Players = () => {
  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />
    </Styled.Container>
  );
};
