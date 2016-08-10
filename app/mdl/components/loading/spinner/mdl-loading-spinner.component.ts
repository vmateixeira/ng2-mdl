import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../../directives/mdl-upgrade-element.directive';

import { MdlLoading } from '../mdl-loading.interface';

declare var MaterialProgress: any;

@Component({
    selector: 'mdl-loading-spinner',
    templateUrl: 'app/mdl/components/loading/spinner/mdl-loading-spinner.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlLoadingSpinnerComponent implements OnInit {

    @Input() loading: MdlLoading;

    constructor() {

    }

    ngOnInit() {
        
    }

    get singleColor(): boolean {
        return this.loading.singleColor;
    }

    get active(): boolean {
        return this.loading.active;
    }
}