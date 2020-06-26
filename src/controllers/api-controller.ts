import { ItunesApiResult } from '../types/interfaces/itunes-api-result';

const url = 'https://itunes.apple.com/search?term=';

export class ApiController {
	async getResults(search: string): Promise<ItunesApiResult> {
		if (!search) {
			return Promise.reject('Please pick an artist/song');
		}

		return (await fetch(url + search)).json();
	}
}
