import { Alert } from 'react-native';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { createGroup } from '@storage/group/createGroup';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import * as Styled from './styles';

export const NewGroups = () => {
  const [group, setGroup] = useState('');
  const { navigate } = useNavigation();

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Erro ao criar grupo', 'Digite o nome da turma');
      }

      await createGroup(group);
      navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro ao criar grupo', error.message);
      } else {
        Alert.alert('Erro ao criar grupo', 'Não foi possível criar grupo');
      }
    }
  };

  return (
    <Styled.Container>
      <Header showBackButton />
      <Styled.Content>
        <Styled.Icon />
        <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />
        <Input placeholder="Nome da turma" onChangeText={setGroup} autoCorrect={false} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Styled.Content>
    </Styled.Container>
  );
};
