import Cow from './Cow';
import Saucer from './Saucer';

export default class Animation {
  async start() {
    const ufo = new Saucer();
    const cow = new Cow();

    await ufo.moveTo('flyIn');
    await ufo.toggleBeam(true);
    await cow.moveTo('cowAbduction');
    await cow.hide();
    await ufo.toggleBeam(false);
    await ufo.moveTo('flyOut');
  }
}
