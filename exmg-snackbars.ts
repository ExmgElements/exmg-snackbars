import {LitElement, html, customElement, PropertyValues} from 'lit-element';

import '@polymer/paper-icon-button/paper-icon-button';

import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-styles/paper-styles';

import {MDCSnackbar} from '@material/snackbar/index';

@customElement('exmg-snackbars')
export class ExmgSnackbars extends LitElement {
  protected firstUpdated(_changedProperties: PropertyValues): void {
    // const snackbar = new MDCSnackbar(this.shadowRoot!.querySelector('.mdc-snackbar'));
  }

  // protected render() {
  //   return html`
  //   <link rel="stylesheet" href="/node_modules/@material/snackbar/dist/mdc.snackbar.css" />
  //   <div class="mdc-snackbar mdc-snackbar--open"><div class="mdc-snackbar__surface"><div class="mdc-snackbar__label" role="status" aria-live="polite">Can't send photo. Retry in 5 seconds.</div><div class="mdc-snackbar__actions"><button type="button" class="mdc-button mdc-snackbar__action">Retry</button><button class="mdc-icon-button mdc-snackbar__dismiss material-icons" title="Dismiss">close</button></div></div></div>
  //   `;
  // }
}
