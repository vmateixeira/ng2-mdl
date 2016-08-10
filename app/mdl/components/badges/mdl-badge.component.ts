import { Component, Input, OnInit } from '@angular/core';

import { MdlUpgradeElementDirective } from '../../directives/mdl-upgrade-element.directive';

import { MdlBadge } from './mdl-badge.interface';

@Component({
    selector: 'mdl-badge',
    templateUrl: 'app/mdl/components/badges/mdl-badge.component.html',
    directives: [MdlUpgradeElementDirective]
})
export class MdlBadgeComponent implements OnInit {

    @Input() badge: MdlBadge;

    constructor() {

    }

    ngOnInit() {
        
    }

    get icon(): boolean {
        return this.badge.icon;
    }

    get text(): string {
        return this.badge.text;
    }

    get overlapText(): number|string {
        return this.badge.overlapText;
    }
}