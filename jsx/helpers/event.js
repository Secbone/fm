export class PlayerEvent {
    constructor(){}

    on(name, callback) {
        window.addEventListener(`player:${name}`, e => {
            callback.call(this, e.detail);
        });
    }

    trigger(name, data) {
        let e = new CustomEvent(`player:${name}`, {
            detail: data,
        });

        window.dispatchEvent(e);
    }
}

let event = new PlayerEvent();

export default event;
