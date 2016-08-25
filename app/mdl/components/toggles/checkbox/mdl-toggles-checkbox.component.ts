import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../../directives/mdl-upgrade-element.directive';

import { MdlToggles } from '../mdl-toggles.interface';

declare var MaterialProgress: any;

@Component({
    selector: 'mdl-toggles-checkbox',
    templateUrl: 'app/mdl/components/toggles/checkbox/mdl-toggles-checkbox.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlTogglesCheckboxComponent implements OnInit {

    @Input() checkbox: MdlToggles;

    constructor() {

    }

    ngOnInit() {
        
    }

    get id(): number|string {
        return this.checkbox.id;
    }

    get text(): string {
        return this.checkbox.text;
    }

    get checked(): boolean {
        return this.checkbox.checked;
    }

    get ripple(): boolean {
        return this.checkbox.ripple;
    }

    get disabled(): boolean {
        return this.checkbox.disabled;
    }
}