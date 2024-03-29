import { Alert, TextInput } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter/indext';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import * as Styled from './styles';
import { PlayCard } from '@components/PlayCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteParams } from './PlayersProps';
import { AppError } from '@utils/AppError';
import { createPlayerByGroup } from '@storage/players/createPlayerByGroup';
import { findAllPlayersByGroupAndTeam } from '@storage/players/findAllPlayersByGroupAndTeam';
import { PlayerStorageDto } from '@storage/players/PlayerStorageDto';
import { deletePlayerByGroup } from '@storage/players/deletePlayerByGroup';
import { removeGroupByName } from '@storage/group/removeGroupByName';
import { Loading } from '@components/Loading';

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDto[]>([]);
  const [player, setPlayer] = useState('');
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const newPlayerRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();

  const handleAddPlayer = async () => {
    if (player.trim().length === 0) {
      return Alert.alert('Erro ao criar jogador', 'Digite o nome do jogador');
    }

    const newPlayer = {
      name: player,
      team,
    };

    try {
      await createPlayerByGroup(newPlayer, group);
      newPlayerRef.current?.blur();
      setPlayer('');
      await getPlayers();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro ao criar jogador', error.message);
      } else {
        Alert.alert('Erro ao criar jogador', 'Não foi possível criar jogador');
      }
    }
  };

  const getPlayers = async () => {
    try {
      setIsLoading(true);
      const storage = await findAllPlayersByGroupAndTeam(group, team);
      setPlayers(storage);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro ao buscar jogadores', error.message);
      } else {
        Alert.alert('Erro ao buscar jogadores', 'Não foi possível buscar jogadores');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemovePlayer = async (player: string) => {
    try {
      await deletePlayerByGroup(player, group);
      await getPlayers();
    } catch (error) {
      Alert.alert('Erro ao apagar jogador', 'Não foi possível apagar jogador');
    }
  };

  const RemoveGroup = async () => {
    try {
      await removeGroupByName(group);
      navigate('groups');
    } catch (error) {
      Alert.alert('Erro ao apagar turma', 'Não foi possível apagar turma');
    }
  };

  const handleRemoveGroup = () => {
    Alert.alert('Remoção de turma', 'Deseja remover essa turma ?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => RemoveGroup(),
      },
    ]);
  };

  useEffect(() => {
    getPlayers();
  }, [team]);

  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Styled.Form>
        <Input
          inputRef={newPlayerRef}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={player}
          onChangeText={setPlayer}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Styled.Form>

      <Styled.HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D', 'Time E']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Filter text={item} isActive={item === team} onPress={() => setTeam(item)} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Styled.NumberOfPlayers>{players.length}</Styled.NumberOfPlayers>
      </Styled.HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <PlayCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty message="Que tal adicionar um novo usuário a esse time ?" />}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
        />
      )}

      <Button title="Remover turma" type="SECONDARY" onPress={handleRemoveGroup} />
    </Styled.Container>
  );
};
