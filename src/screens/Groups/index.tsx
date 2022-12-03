import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { mock } from './mock';
import * as Styled from './styles';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>(mock);

  return (
    <Styled.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList data={groups} keyExtractor={(item) => item} renderItem={({ item }) => <GroupCard title={item} />} />
    </Styled.Container>
  );
};
