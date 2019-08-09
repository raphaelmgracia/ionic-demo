import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DemoModalComponent } from '../core/components/demo-modal/demo-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController,
    public router: Router
  ) {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DemoModalComponent
    });
    return await modal.present();
  }
  checkDate($event) {
    console.log(new Date($event.detail.value));
    
  }

}
