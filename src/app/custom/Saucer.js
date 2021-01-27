import EventEmitter from 'eventemitter3';
import gsap from 'gsap/gsap-core';

export default class Saucer extends EventEmitter {
  constructor() {
    super();

    this._saucerElement = document.querySelector('.ufo');
    this._beamTopElement = document.querySelector('#beam-top');
    this._beamBottomElement = document.querySelector('#beam-bottom');
  }

  async moveTo(id) {
    const x = id === 'flyIn' ? -835 : -1800;
    const ease = id === 'flyIn' ? 'power1.out' : 'power1.in';

    await gsap.to(this._saucerElement, { x, duration: 2, id, ease });

    this.emit(id === 'flyIn' ? Saucer.events.FLY_IN : Saucer.events.FLY_AWAY);
  }

  async toggleBeam(show) {
    gsap.to(this._beamTopElement, {
      opacity: (show ? 0.6 : 0),
      id: (show ? 'showTopBeam' : 'hideTopBeam'),
      duration: 1,
    });
    await gsap.to(this._beamBottomElement, {
      opacity: (show ? 0.6 : 0),
      id: (show ? 'showBottomBeam' : 'hideBottomBeam'),
      duration: 1,
    });

    this.emit(show ? Saucer.events.BEAM_SHOW : Saucer.events.BEAM_HIDE);
  }

  static get events() {
    return {
      FLY_IN: 'fly_in',
      FLY_AWAY: 'fly_away',
      BEAM_SHOW: 'beam_showed',
      BEAM_HIDE: 'beam_hide',
    };
  }
}
