import './assets/style/style.scss';
import Controller from './Controller/slider.controller';

new Controller('.slider', {
    configPanel: true,
    percent: false,
    min: -10000000,
    max: 1000000000000000,
    rulers: false,
    tooltip: true,
    range: true,
});