import { gameRepository } from '../repositories/game'
import { GameIdleEntity} from '../domain';

export async function getIdleGames():Promise<GameIdleEntity[]>{
	const games = await gameRepository.gameList({
		status:'idle',
	});

	return games as GameIdleEntity[];
};