import {ApiController} from "./controllers/api-controller.js";
import {DomController} from "./controllers/dom-controller.js";

const
    apiController = new ApiController(),
    domController = new DomController();


// IIFE
(async () => {
    console.log('MAIN is starting!');
    let songs;
    try {
        songs = (await apiController.getResults('micheal+jackson')).results;

    } catch (e) {
        console.error(e);
    }
    songs
        .forEach(song => domController.addSong(song))
})()


// OPTION 1
// .then(data=>{
// 	console.log(data);
// })
