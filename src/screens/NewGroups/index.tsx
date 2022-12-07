import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import * as Styled from './styles';

export const NewGroups = () => {
  return (
    <Styled.Container>
      <Header showBackButton />
      <Styled.Content>
        <Styled.Icon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Styled.Content>
    </Styled.Container>
  );
};
