import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../../directives/mdl-upgrade-element.directive';

import { MdlLoading } from '../mdl-loading.interface';

declare var MaterialProgress: any;

@Component({
    selector: 'mdl-loading-progress-bar',
    templateUrl: 'app/mdl/components/loading/progress-bar/mdl-loading-progress-bar.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlLoadingProgressBarComponent implements OnInit {

    @Input() loading: MdlLoading;

    @ViewChild('progressBarChild') progressBarChild;

    constructor() {

    }

    ngOnInit() {
        
    }

    get indeterminate(): boolean {
        return this.loading.indeterminate;
    }

    setProgress(value: number) {
        this.progressBarChild.nativeElement.MaterialProgress.setProgress(value);
    }

    setBuffer(value: number) {
        this.progressBarChild.nativeElement.MaterialProgress.setBuffer(value);
    }
}