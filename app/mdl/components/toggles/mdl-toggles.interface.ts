export interface MdlToggles {
    //Checkbox
    id: number|string;
    text: string;
    ripple?: boolean;
    checked?: boolean;
    disabled?: boolean;

    //Radio
    name?: number|string;
    value?: number|string;
}