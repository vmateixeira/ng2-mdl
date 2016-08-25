import { Directive, ElementRef, AfterViewInit } from  '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MdlUpgradeElementDirective implements AfterViewInit {
    
    constructor(private elementRef: ElementRef) {

    }

    ngAfterViewInit() {
        componentHandler.upgradeElement(this.elementRef.nativeElement);
    }
}