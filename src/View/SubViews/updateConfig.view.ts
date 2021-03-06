import $ from 'jquery';
import {TogglesEnum} from '../../utils/Config.enum';

function updateConfig ():void {
    const newSelector: string = this.selectorState.slice(1);

    this.optionsState.toggleConfig.forEach((item: string) => {
        const element: JQuery = $(`#${newSelector}__toggle-${item}`);

        element.on('change', (): void => {
            const value: boolean = element.prop('checked');

            switch (item) {
                case TogglesEnum.VERTICAL:
                    this.optionsState.vertical = value;
                    this.setVertical();
                    break;
                case TogglesEnum.RULERS:
                    this.optionsState.rulers = value;
                    this.setRulers();
                    break;
                case TogglesEnum.PROGRESS:
                    this.optionsState.progress = value;
                    this.setBar();
                    break;
                case TogglesEnum.TOOLTIP:
                    this.optionsState.tooltip = value;
                    this.setTooltip();
                    break;
                case TogglesEnum.RANGE:
                    this.optionsState.range = value;
                    this.setRange();
                    break;
            }
        });
    });
}

export default updateConfig;