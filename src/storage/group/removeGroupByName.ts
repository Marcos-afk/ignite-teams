import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { findAllGroups } from './findAllGroups';

export const removeGroupByName = async (group: string) => {
  try {
    const groups = await findAllGroups();
    const filter = groups.filter((g) => g !== group);
    const storage = JSON.stringify(filter);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {
    throw error;
  }
};
