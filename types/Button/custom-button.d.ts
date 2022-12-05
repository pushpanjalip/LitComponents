import { LitElement } from "lit";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class CustomButton extends LitElement {
    /**
     * The number of times the button has been clicked.
     */
    text: string;
    /**
     * The number of times the button has been clicked.
     */
    type: string;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "custom-button": CustomButton;
    }
}
