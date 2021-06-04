export default class EffectAnimation {
    constructor(name) {
        this.name = name
    }

    addAnimation(x, anim) {
        const element = document.querySelector(x);
        return element.classList.add('animate__animated', anim);
    }

    removeAnimation(x, anim) {
        const element = document.querySelector(x);
        return element.classList.remove('animate__animated', anim);
    }

}