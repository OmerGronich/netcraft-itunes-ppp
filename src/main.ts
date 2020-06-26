import { DomController } from './controllers/dom-controller.js';
import { ApiController } from './controllers/api-controller.js';
import { SongResult } from './types/interfaces/itunes-api-result.js';

const domController = new DomController();
const apiController = new ApiController();

domController.form.submit(async (e) => {
	e.preventDefault();

	const searchResult = domController.searchInput.val() as string;

	try {
		domController.startLoading();

		const songs = (await apiController.getResults(searchResult)).results;

		domController.stopLoading();

		if (!songs.length) {
			domController.infoMsg.text("Couldn't find anything... try again :)");
			return;
		}

		domController.clearSongs();

		songs.forEach((song: SongResult, index: number) =>
			domController.addSong(song, index)
		);
	} catch (error) {
		domController.stopLoading();
		domController.alertDanger(error);
	}
});
