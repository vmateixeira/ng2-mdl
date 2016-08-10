import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { MdlLoading } from '../../../mdl/components/loading/mdl-loading.interface';
import { MdlLoadingProgressBarComponent } from '../../../mdl/components/loading/progress-bar/mdl-loading-progress-bar.component';
import { MdlLoadingSpinnerComponent } from '../../../mdl/components/loading/spinner/mdl-loading-spinner.component';

@Component({
    selector: 'mdl-showcase-loading',
    templateUrl: 'app/mdl/showcase/loading/mdl-showcase-loading.component.html',
    directives: [MdlLoadingProgressBarComponent, MdlLoadingSpinnerComponent]
})
export class MdlShowcaseLoadingComponent implements AfterViewInit {
    private loading1: MdlLoading;
    private loading2: MdlLoading;
    private loading3: MdlLoading;

    @ViewChild('progressBarChild1') progressBarChild1: MdlLoadingProgressBarComponent;
    @ViewChild('progressBarChild3') progressBarChild3: MdlLoadingProgressBarComponent;

    private loading4: MdlLoading;
    private loading5: MdlLoading;

    constructor() {
        this.loading1 = {
            indeterminate: false
        }

        this.loading2 = {
            indeterminate: true
        }

        this.loading3 = {
            
        }

        this.loading4 = {
            active: true
        }

        this.loading5 = {
            active: true,
            singleColor: true
        }
    }

    ngAfterViewInit() {
        this.progressBarChild1.setProgress(44);

        this.progressBarChild3.setProgress(33);
        this.progressBarChild3.setBuffer(87);
    }
}