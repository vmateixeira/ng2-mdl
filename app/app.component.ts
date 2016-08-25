import { Component } from '@angular/core';

import { MdlShowcaseBadgesComponent } from './mdl/showcase/badges/mdl-showcase-badges.component';
import { MdlShowcaseButtonsComponent } from './mdl/showcase/buttons/mdl-showcase-buttons.component';

import { MdlShowcaseLoadingComponent } from './mdl/showcase/loading/mdl-showcase-loading.component';
import { MdlShowcaseSlidersComponent } from './mdl/showcase/sliders/mdl-showcase-sliders.component';

import { MdlShowcaseTogglesComponent } from './mdl/showcase/toggles/mdl-showcase-toggles.component';

@Component({
    selector: 'mdl-app',
    templateUrl: 'app/app.component.html',
    directives: [MdlShowcaseBadgesComponent, MdlShowcaseButtonsComponent, MdlShowcaseLoadingComponent, MdlShowcaseSlidersComponent, MdlShowcaseTogglesComponent]
})
export class AppComponent {
    
}