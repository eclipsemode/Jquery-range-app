import $ from 'jquery';

class Progress {

    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public getProgress(): JQuery<HTMLElement> {
        return $('<div>', {
            class: 'slider-app__progress js-slider-app__progress'
        }).prependTo(`${this.selector} .slider-app__bar-line`);
    }

}

export default Progress;