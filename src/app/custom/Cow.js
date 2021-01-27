import EventEmitter from 'eventemitter3';
import gsap from 'gsap/gsap-core';

export default class Cow extends EventEmitter {
  constructor() {
    super();

    this._cowElement = document.querySelector('.cow');
  }

  static get events() {
    return {
      ABDUCT_COMPLETED: 'abduct_completed',
    };
  }

  async moveTo(id) {
    await gsap.to(this._cowElement, { y: -390, id, duration: 2, rotation: 20 });
    this.emit(Cow.events.ABDUCT_COMPLETED);
  }

  async hide() {
    await gsap.to(this._cowElement, { opacity: 0, duration: 0, id: 'cowHide' });
  }
}
