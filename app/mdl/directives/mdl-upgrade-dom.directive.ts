import { Directive, ElementRef, AfterViewInit } from  '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdlDom]'
})
export class MdlUpgradeDomDirective implements AfterViewInit {
    
    constructor(private elementRef: ElementRef, private materialElement: string, private upgrade: string) {

    }

    ngAfterViewInit() {
        componentHandler.upgradeDom(this.materialElement, this.upgrade);
        
        //Example for menus to work:
        //componentHandler.upgradeDom('MaterialMenu', 'mdl-menu');
    }
}