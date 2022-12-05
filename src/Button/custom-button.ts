import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
export interface CustomButtonProps {
  type: string;
}

@customElement("custom-button")
export class CustomButton extends LitElement {
  @property({ type: String })
  type = "primary";

  render() {
    return html`<div
      id="btn"
      tabindex="0"
      role="button"
      aria-pressed="false"
      class=${this.type}
    >
      <slot></slot>
    </div>`;
  }

  static styles = css`
    #btn {
      padding: 1em;
      min-width: 4em;
      height: 2em;
      cursor: pointer;
      border-radius: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #btn.primary {
      background-color: var(--primary-color, #00a1de);
    }
    #btn.secondary {
      background-color: var(--secondary-color, #e37222);
    }
    #btn.error {
      background-color: var(--error, #e00034);
    }
    #btn:active:hover,
    #btn:hover:active {
      box-shadow: inset gray 0.2em 0.2em 0.4em, inset white -0.1em -0.1em 0.2em;
    }
    ::slotted(svg) {
      width: 1em;
      height: 1em;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-button": CustomButton;
  }
}
