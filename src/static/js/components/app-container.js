import { css, html, LitElement } from 'lit';

export class AppContainerElement extends LitElement {
  static properties = {};

  static styles = css``;

  render() {
    return html`<main>Smoketest</main>`;
  }
}

customElements.define('app-container', AppContainerElement);
