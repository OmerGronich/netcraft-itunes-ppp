import {SongResult} from '../types/interfaces/itunes-api-result';

declare let $: JQueryStatic;

export class DomController {
    tbody: JQuery;
    form: JQuery;
    appWrapper: JQuery;
    searchInput: JQuery;
    searchBtn: JQuery;
    infoMsg: JQuery;
    onSearch: () => void;

    constructor() {
        this.appWrapper = $('.app-wrapper');
        this.tbody = $('#tbody');
        this.form = $('.search-header');
        this.searchInput = $('input');
        this.searchBtn = $('#search-btn');
        this.infoMsg = $('#info-message');
        this.form.submit((e) => this.onSearchSubmit(e));
    }

    addSong(song: SongResult, number: number) {
        const row = `
			<tr>
				<td style="vertical-align: middle;" scope="row">${number + 1}.</th>
				<td style="display: flex; justify-content: space-between; align-items: center;">${
            song.trackName
        } <audio src="${
            song.previewUrl
        }" type="audio/x-m4a" controls preload="auto" style="width: 200px;" /></td>
				<td style="vertical-align: middle;">${song.artistName}</td>
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

    onSearchSubmit(e: any) {
        e.preventDefault();
        this.onSearch();
    }
}
