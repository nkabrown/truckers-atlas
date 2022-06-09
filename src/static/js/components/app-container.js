import { css, html, LitElement } from "lit";

export class AppContainerElement extends LitElement {
  static properties = {};

  static styles = css``;

  render() {
    return html`<p>Smoketest</p>`;
  }
}

customElements.define("app-container", AppContainerElement);
