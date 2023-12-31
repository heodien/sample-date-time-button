import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonModal) ionDateTimeModal!: IonModal;
  constructor() {}

  openPicker() {
    this.ionDateTimeModal.present();
}
}
