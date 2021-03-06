import $ from 'jquery';

class Thumb {
    private readonly selector: string;
    private min: number;
    private max: number;
    private step: number;
    private value: number;
    private valueSecond: number;

    constructor(
        selector: string,
        min: number,
        max: number,
        value: number,
        valueSecond: number,
        step: number) {

        this.selector = selector;
        this.min = min;
        this.max = max;
        this.value = value;
        this.valueSecond = valueSecond;
        this.step = step;
    }
    
    getMinThumb(): JQuery<HTMLElement> {
        return $('<input>', {
            class: 'slider-app__input js-slider-app__input slider-app__input-min js-slider-app__input-min',
            type: 'range',
            min: this.min,
            max: this.max,
            value: this.value,
            step: this.step
        }).appendTo(`${this.selector} .slider-app__bar-line`);
    }

    getMaxThumb(): JQuery<HTMLElement> {
        return $('<input>', {
            class: 'slider-app__input js-slider-app__input slider-app__input-max js-slider-app__input-max',
            type: 'range',
            min: this.min,
            max: this.max,
            value: this.valueSecond,
            step: this.step
        }).appendTo(`${this.selector} .slider-app__bar-line`);
    }
    
}

export default Thumb;