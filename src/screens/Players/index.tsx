import { useState } from 'react';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter/indext';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import * as Styled from './styles';

export const Players = () => {
  const [team, setTeam] = useState('');
  const [players, setPlayers] = useState([]);

  return (
    <Styled.Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <Styled.Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
    </Styled.Container>
  );
};
