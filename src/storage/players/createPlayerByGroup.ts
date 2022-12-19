import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDto } from './PlayerStorageDto';
import { findByAllPlayersByGroup } from './findAllPlayersByGroup';

export const createPlayerByGroup = async (player: PlayerStorageDto, group: string) => {
  try {
    const players = await findByAllPlayersByGroup(group);
    const playerAlreadyExists = players.filter((p) => p.name === player.name);
    if (playerAlreadyExists.length > 0) {
      throw new AppError('Jogador com esse nome já foi cadastrado em um time');
    }

    const storage = JSON.stringify([...players, player]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
