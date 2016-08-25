import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../../directives/mdl-upgrade-element.directive';

import { MdlToggles } from '../mdl-toggles.interface';

declare var MaterialProgress: any;

@Component({
    selector: 'mdl-toggles-radio',
    templateUrl: 'app/mdl/components/toggles/radio/mdl-toggles-radio.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlTogglesRadioComponent implements OnInit {

    @Input() radio: MdlToggles;

    constructor() {

    }

    ngOnInit() {
        
    }

    get id(): number|string {
        return this.radio.id;
    }

    get text(): string {
        return this.radio.text;
    }

    get checked(): boolean {
        return this.radio.checked;
    }

    get ripple(): boolean {
        return this.radio.ripple;
    }

    get disabled(): boolean {
        return this.radio.disabled;
    }

    get name(): number|string {
        return this.radio.name;
    }

    get value(): number|string {
        return this.radio.value;
    }
}