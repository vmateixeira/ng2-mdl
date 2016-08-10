import { Component, Input, ViewChild } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../directives/mdl-upgrade-element.directive';

import { MdlSlider } from './mdl-slider.interface';

declare var MaterialSlider: any;

@Component({
    selector: 'mdl-slider',
    templateUrl: 'app/mdl/components/sliders/mdl-slider.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlSliderComponent {

    @Input() slider: MdlSlider;

    @ViewChild('sliderChild') sliderChild;

    constructor() {

    }

    get width(): string {
        return (this.slider.width == undefined ? '300' : String(this.slider.width)).concat('px');
    }

    get min(): number {
        return this.slider.min;
    }

    get max(): number {
        return this.slider.max;
    }

    get value(): number {
        return this.slider.value;
    }

    get step(): number {
        return this.slider.step;
    }

    get disabled(): boolean {
        return this.slider.disabled;
    }

    setValue(value: number) {
        this.sliderChild.nativeElement.MaterialSlider.change(value);
    }

    getValue(): number {
        return this.sliderChild.nativeElement.value;
    }
}