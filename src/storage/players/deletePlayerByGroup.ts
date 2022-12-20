import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { findAllPlayersByGroup } from './findAllPlayersByGroup';

export const deletePlayerByGroup = async (player: string, group: string) => {
  try {
    const players = await findAllPlayersByGroup(group);

    const filter = players.filter((p) => p.name !== player);
    const storage = JSON.stringify(filter);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
