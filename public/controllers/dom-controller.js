var DomController = /** @class */ (function () {
    function DomController() {
        this.appWrapper = $('.app-wrapper');
        this.tbody = $('#tbody');
        this.form = $('.search-header');
        this.searchInput = $('input');
        this.searchBtn = $('#search-btn');
        this.infoMsg = $('#info-message');
    }
    DomController.prototype.addSong = function (song, number) {
        var row = "\n    <tr>\n      <th scope=\"row\">" + number + ".</th>\n      <td>" + song.trackName + "</td>\n      <td>" + song.artistName + "</td>\n    </tr>\n    ";
        this.tbody.append(row);
    };
    DomController.prototype.startLoading = function () {
        this.searchBtn.html("<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span> Loading...");
    };
    DomController.prototype.stopLoading = function () {
        this.searchBtn.html('Search');
    };
    DomController.prototype.clearSongs = function () {
        this.tbody.html('');
    };
    DomController.prototype.alertDanger = function (msg) {
        this.tbody.html("\n        <tr>\n          <td>\n            <h3\n              id=\"info-message\"\n              class=\"text-secondary\"\n              style=\"opacity: 0.3;\"\n            >\n            Couldn't find anything... try again :)\n            </h3>\n          </td>\n        </tr>\n      ");
        var alert = "<div class='alert alert-danger mt-4'>" + msg + "</div>";
        this.appWrapper.append(alert);
        setTimeout(function () {
            $('.alert-danger').fadeOut('slow');
        }, 3000);
    };
    return DomController;
}());
export { DomController };
