import { LitElement } from "lit";
export interface CustomButtonProps {
    type: string;
}
export declare class CustomButton extends LitElement {
    type: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "custom-button": CustomButton;
    }
}
