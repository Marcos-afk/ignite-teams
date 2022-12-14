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
import { Loading } from '@components/Loading';

export const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate('new');
  };

  const handleOpenGroup = (group: string) => {
    navigate('players', { group });
  };

  const getGroups = async () => {
    try {
      setIsLoading(true);
      const storage = await findAllGroups();
      setGroups(storage);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro ao buscar grupos', error.message);
      } else {
        Alert.alert('Erro ao buscar grupos', 'Não foi possível buscar grupos');
      }
    } finally {
      setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar uma turma ?" />}
        />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Styled.Container>
  );
};
