import { Component } from '@angular/core';

import { MdlToggles } from '../../../mdl/components/toggles/mdl-toggles.interface';
import { MdlTogglesCheckboxComponent } from '../../../mdl/components/toggles/checkbox/mdl-toggles-checkbox.component';
import { MdlTogglesRadioComponent } from '../../../mdl/components/toggles/radio/mdl-toggles-radio.component';

@Component({
    selector: 'mdl-showcase-toggles',
    templateUrl: 'app/mdl/showcase/toggles/mdl-showcase-toggles.component.html',
    directives: [MdlTogglesCheckboxComponent, MdlTogglesRadioComponent]
})
export class MdlShowcaseTogglesComponent {
    private toggle1: MdlToggles;
    private toggle2: MdlToggles;
    private toggle3: MdlToggles;
    private toggle4: MdlToggles;

    private toggle5: MdlToggles;
    private toggle6: MdlToggles;
    private toggle7: MdlToggles;
    private toggle8: MdlToggles;
    private toggle9: MdlToggles;
    private toggle10: MdlToggles;

    constructor() {
        this.toggle1 = {
            id: 'toggle1',
            text: 'Checkbox1',
            checked: true
        }

        this.toggle2 = {
            id: 'toggle2',
            text: 'Checkbox2'
        }

        this.toggle3 = {
            id: 'toggle3',
            text: 'Checkbox3',
            ripple: true
        }

        this.toggle4 = {
            id: 'toggle4',
            text: 'Checkbox4',
            disabled: true
        }

        this.toggle5 = {
            id: 'toggle5',
            text: 'Radio1',
            name: 'radioGroup1'
        }

        this.toggle6 = {
            id: 'toggle6',
            text: 'Radio2',
            name: 'radioGroup1'
        }

        this.toggle7 = {
            id: 'toggle7',
            text: 'Radio3',
            name: 'radioGroup2'
        }

        this.toggle8 = {
            id: 'toggle8',
            text: 'Radio4',
            name: 'radioGroup2'
        }

        this.toggle9 = {
            id: 'toggle9',
            text: 'Radio5',
            name: 'radioGroup3'
        }

        this.toggle10 = {
            id: 'toggle10',
            text: 'Radio6',
            name: 'radioGroup3'
        }
    }
}