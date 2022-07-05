import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class BandsBandSongsRoute extends Route {
  @service catalog;

  async model() {
    let band = this.modelFor('bands.band');

    await this.catalog.fetchRelated(band, 'songs');
    return band;
  }








  // reset the model every time we enter
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
