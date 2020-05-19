import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  openModal() {
    const modalElement = document.createElement("ion-modal");
    modalElement.component = "app-modal";
    modalElement.componentProps = {
    };
    document.body.appendChild(modalElement);
    modalElement.onWillDismiss().then((x) => {
      console.log(x);
    });

    return modalElement.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button expand="block" onClick={() => this.openModal()}>Create Modal</ion-button>
      </ion-content>
    ];
  }
}
