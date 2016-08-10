import { Component } from '@angular/core';

import { MdlBadge } from '../../../mdl/components/badges/mdl-badge.interface';
import { MdlBadgeComponent } from '../../../mdl/components/badges/mdl-badge.component';

@Component({
    selector: 'mdl-showcase-badges',
    templateUrl: 'app/mdl/showcase/badges/mdl-showcase-badges.component.html',
    directives: [MdlBadgeComponent]
})
export class MdlShowcaseBadgesComponent {
    private badge1: MdlBadge;
    private badge2: MdlBadge;
    private badge3: MdlBadge;
    private badge4: MdlBadge;

    constructor() {
        this.badge1 = {
            icon: true,
            text: 'account_box',
            overlapText: '1'
        }

        this.badge2 = {
            icon: true,
            text: 'account_box',
            overlapText: '♥'
        }

        this.badge3 = {
            icon: false,
            text: 'Inbox',
            overlapText: '4'
        }

        this.badge4 = {
            icon: false,
            text: 'Mood',
            overlapText: '♥'
        }
    }
}