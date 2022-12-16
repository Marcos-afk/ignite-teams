import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { findAllGroups } from './findAllGroups';

export const createGroup = async (name: string) => {
  try {
    const groups = await findAllGroups();

    const groupAlreadyExists = groups.includes(name);
    if (groupAlreadyExists) {
      throw new AppError('Grupo com esse nome já foi cadastrado');
    }

    const storage = JSON.stringify([...groups, name]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw new AppError(`Ocorreu um error: ${error}`);
  }
};
