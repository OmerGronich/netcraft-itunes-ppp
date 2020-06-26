import { SongResult } from '../types/interfaces/itunes-api-result';
declare let $: JQueryStatic;

export class DomController {
	tbody: JQuery;
	form: JQuery;
	appWrapper: JQuery;
	searchInput: JQuery;
	searchBtn: JQuery;
	infoMsg: JQuery;

	constructor() {
		this.appWrapper = $('.app-wrapper');
		this.tbody = $('#tbody');
		this.form = $('.search-header');
		this.searchInput = $('input');
		this.searchBtn = $('#search-btn');
		this.infoMsg = $('#info-message');
	}

	addSong(song: SongResult, number: number) {
		const row = `
    <tr>
      <th scope="row">${number}.</th>
      <td>${song.trackName}</td>
      <td>${song.artistName}</td>
    </tr>
    `;

		this.tbody.append(row);
	}

	startLoading() {
		this.searchBtn.html(
			`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
		);
	}

	stopLoading() {
		this.searchBtn.html('Search');
	}

	clearSongs() {
		this.tbody.html('');
	}

	alertDanger(msg: string) {
		this.tbody.html(
			`
        <tr>
          <td>
            <h3
              id="info-message"
              class="text-secondary"
              style="opacity: 0.3;"
            >
            Couldn't find anything... try again :)
            </h3>
          </td>
        </tr>
      `
		);

		const alert = `<div class='alert alert-danger mt-4'>${msg}</div>`;
		this.appWrapper.append(alert);

		setTimeout(() => {
			$('.alert-danger').fadeOut('slow');
		}, 3000);
	}
}
