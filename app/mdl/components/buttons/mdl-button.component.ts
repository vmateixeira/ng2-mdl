import { Component, Input, OnInit } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../directives/mdl-upgrade-element.directive';

import { MdlButton } from './mdl-button.interface';

@Component({
    selector: 'mdl-button',
    templateUrl: 'app/mdl/components/buttons/mdl-button.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlButtonComponent implements OnInit {

    @Input() button: MdlButton;

    constructor() {

    }

    ngOnInit() {
        
    }

    get fab(): boolean {
        return this.button.fab;
    }

    get miniFab(): boolean {
        return this.button.miniFab;
    }

    get raised(): boolean {
        return this.button.raised;
    }

    get icon(): boolean {
        return this.button.icon;
    }

    get primary(): boolean {
        return this.button.primary;
    }

    get accent(): boolean {
        return this.button.accent;
    }

    get ripple(): boolean {
        return this.button.ripple;
    }

    get colored(): boolean {
        return this.button.colored;
    }

    get disabled(): boolean {
        return this.button.disabled;
    }

    get text(): string {
        return this.button.text;
    }
}