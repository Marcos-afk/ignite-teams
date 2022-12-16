import { Alert } from 'react-native';
import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as Styled from './styles';
import { findAllGroups } from '@storage/group/findAllGroups';
import { AppError } from '@utils/AppError';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate('new');
  };

  const getGroups = async () => {
    try {
      const storage = await findAllGroups();
      setGroups(storage);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro ao buscar grupos', error.message);
      } else {
        Alert.alert('Erro ao buscar grupos', 'Não foi possível buscar grupos');
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      getGroups();
    }, []),
  );

  return (
    <Styled.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar uma turma ?" />}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Styled.Container>
  );
};
