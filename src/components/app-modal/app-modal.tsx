import { Component, ComponentInterface, Element, h } from '@stencil/core';

@Component({
  tag: 'app-modal',
  styleUrl: 'app-modal.css',
  shadow: true,
})
export class AppModal implements ComponentInterface {

  @Element() el: any;

  dismiss() {
    // dismiss this modal and pass back data
    (this.el.closest("ion-modal") as any).dismiss({
      dismissed: true,
    });
  }

  render() {
    return [
      <ion-header class="modal-header" >
        <ion-toolbar color="light">
          <ion-buttons slot="primary">
            <ion-button
              class="btn_close_modal"
              color="primary"
              onClick={() => this.dismiss()}
            >
              <ion-icon name="close" />
            </ion-button>
          </ion-buttons>
          <ion-title color="">Header modal</ion-title>
        </ion-toolbar>
      </ion-header>,,
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label>Gender</ion-label>
            <ion-select placeholder="Select One">
              <ion-select-option value="f">Female</ion-select-option>
              <ion-select-option value="m">Male</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }

}
