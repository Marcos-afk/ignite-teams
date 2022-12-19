import { findByAllPlayersByGroup } from './findAllPlayersByGroup';

export const findAllPlayersByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storage = await findByAllPlayersByGroup(group);
    return storage.filter((player) => player.team === team);
  } catch (error) {
    throw error;
  }
};
