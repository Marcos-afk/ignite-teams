import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { findAllGroups } from './findAllGroups';

export const createGroup = async (name: string) => {
  try {
    const groups = await findAllGroups();
    const storage = JSON.stringify([...groups, name]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
