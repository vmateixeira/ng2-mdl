import { Component } from '@angular/core';

import { MdlButton } from '../../../mdl/components/buttons/mdl-button.interface';
import { MdlButtonComponent } from '../../../mdl/components/buttons/mdl-button.component';

@Component({
    selector: 'mdl-showcase-buttons',
    templateUrl: 'app/mdl/showcase/buttons/mdl-showcase-buttons.component.html',
    directives: [MdlButtonComponent]
})
export class MdlShowcaseButtonsComponent {
    private button1: MdlButton;
    private button2: MdlButton;

    private button3: MdlButton;
    private button4: MdlButton;
    private button5: MdlButton;

    private button6: MdlButton;
    private button7: MdlButton;
    private button8: MdlButton;

    private button9: MdlButton;
    private button10: MdlButton;
    private button11: MdlButton;

    private button12: MdlButton;
    private button13: MdlButton;
    private button14: MdlButton;

    private button15: MdlButton;
    private button16: MdlButton;

    private button17: MdlButton;
    private button18: MdlButton;

    private button19: MdlButton;
    private button20: MdlButton;

    constructor() {
        this.button1 = {
            fab: true,
            colored: true,
            text: 'add'
        }

        this.button2 = {
            fab: true,
            ripple: true,
            colored: true,
            text: 'add'
        }

        this.button3 = {
            fab: true,
            text: 'add'
        }

        this.button4 = {
            fab: true,
            ripple: true,
            text: 'add'
        }

        this.button5 = {
            fab: true,
            disabled: true,
            text: 'add'
        }

        this.button6 = {
            raised: true,
            text: 'button'
        }

        this.button7 = {
            raised: true,
            ripple: true,
            text: 'button'
        }

        this.button8 = {
            raised: true,
            disabled: true,
            text: 'button'
        }

        this.button9 = {
            raised: true,
            colored: true,
            text: 'button'
        }

        this.button10 = {
            raised: true,
            accent: true,
            text: 'button'
        }

        this.button11 = {
            raised: true,
            accent: true,
            ripple: true,
            text: 'button'
        }

        this.button12 = {
            text: 'button'
        }

        this.button13 = {
            ripple: true,
            text: 'button'
        }

        this.button14 = {
            disabled: true,
            text: 'button'
        }

        this.button15 = {
            primary: true,
            text: 'button'
        }

        this.button16 = {
            accent: true,
            text: 'button'
        }

        this.button17 = {
            icon: true,
            text: 'mood'
        }

        this.button18 = {
            icon: true,
            colored: true,
            text: 'mood'
        }

        this.button19 = {
            miniFab: true,
            text: 'add'
        }

        this.button20 = {
            miniFab: true,
            colored: true,
            text: 'add'
        }
    }
}