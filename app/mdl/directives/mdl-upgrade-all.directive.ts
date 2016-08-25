import { Directive, ElementRef, AfterViewInit } from  '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdlAll]'
})
export class MdlUpgradeAllDirective implements AfterViewInit {
    
    constructor(private elementRef: ElementRef) {

    }

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}