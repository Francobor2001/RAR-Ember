import Route from '@ember/routing/route';

export default class BandsBandSongsRoute extends Route {
  // reset the model every time we enter
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
