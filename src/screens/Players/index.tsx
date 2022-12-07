import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter/indext';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import * as Styled from './styles';

export const Players = () => {
  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <Styled.Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Styled.Form>

      <Filter text="Turma A" isActive />
      <Filter text="Turma B" />
    </Styled.Container>
  );
};
