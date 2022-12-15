import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import * as Styled from './styles';

export const NewGroups = () => {
  const [group, setGroup] = useState('');
  const { navigate } = useNavigation();

  const handleNew = () => {
    navigate('players', { group });
  };

  return (
    <Styled.Container>
      <Header showBackButton />
      <Styled.Content>
        <Styled.Icon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input placeholder="Nome da turma" value={group} onChangeText={setGroup} autoCorrect={false} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Styled.Content>
    </Styled.Container>
  );
};
