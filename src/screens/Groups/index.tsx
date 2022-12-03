import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import * as Styled from './styles';

export const Groups = () => {
  return (
    <Styled.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Nome da turma" />
    </Styled.Container>
  );
};
