import { Alert } from 'react-native';
import { useState } from 'react';
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
import { useRoute } from '@react-navigation/native';
import { RouteParams } from './PlayersProps';
import { AppError } from '@utils/AppError';
import { createPlayerByGroup } from '@storage/players/createPlayerByGroup';
import { findByAllPlayersByGroup } from '@storage/players/findAllPlayersByGroup';

export const Players = () => {
  const [team, setTeam] = useState('');
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState('');
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const handleAddPlayer = async () => {
    if (player.trim().length === 0) {
      return Alert.alert('Erro ao criar jogador', 'Digite o nome do jogador');
    }

    if (team.trim().length === 0) {
      return Alert.alert('Erro ao criar jogador', 'É preciso selecionar a qual time o jogador vai pertencer');
    }

    const newPlayer = {
      name: player,
      team,
    };

    try {
      await createPlayerByGroup(newPlayer, group);
      const players = await findByAllPlayersByGroup(group);
      console.log(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Erro ao criar jogador', error.message);
      } else {
        Alert.alert('Erro ao criar jogador', 'Não foi possível criar jogador');
      }
    }
  };

  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Styled.Form>
        <Input placeholder="Nome do participante" autoCorrect={false} onChangeText={setPlayer} />
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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayCard name={item} onRemove={() => {}} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message="Que tal adicionar um novo usuário a esse time ?" />}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Styled.Container>
  );
};
