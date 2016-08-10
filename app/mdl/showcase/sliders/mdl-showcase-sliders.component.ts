import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { MdlSlider } from '../../../mdl/components/sliders/mdl-slider.interface';
import { MdlSliderComponent } from '../../../mdl/components/sliders/mdl-slider.component';

@Component({
    selector: 'mdl-showcase-sliders',
    templateUrl: 'app/mdl/showcase/sliders/mdl-showcase-sliders.component.html',
    directives: [MdlSliderComponent]
})
export class MdlShowcaseSlidersComponent implements AfterViewInit {
    private slider1: MdlSlider;
    private slider2: MdlSlider;
    private slider3: MdlSlider;
    private slider4: MdlSlider;

    @ViewChild('sliderChild2') sliderChild2: MdlSliderComponent;
    @ViewChild('sliderChild4') sliderChild4: MdlSliderComponent;

    constructor() {
        this.slider1 = {
            min: 0,
            max: 100,
            value: 0,
            step: 2
        }

        this.slider2 = {
            min: 0,
            max: 100,
            value: 25
        }

        this.slider3 = {
            disabled: true
        }

        this.slider4 = {
            min: 0,
            max: 100,
            value: 50
        }
    }

    ngAfterViewInit() {
        this.sliderChild2.getValue();
        this.sliderChild4.setValue(90);
    }
}