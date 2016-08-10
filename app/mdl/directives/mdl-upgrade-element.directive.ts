import { Directive, ElementRef, OnInit, AfterViewInit } from  '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MdlUpgradeElementDirective implements OnInit, AfterViewInit {
    
    constructor(private elementRef: ElementRef) {
        
    }

    ngOnInit() {
        componentHandler.upgradeElement(this.elementRef.nativeElement);
    }
    
    ngAfterViewInit() {
        //componentHandler.upgradeElement(this.elementRef.nativeElement);
    }
}