import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DemoModalComponent } from 'src/app/core/components/demo-modal/demo-modal.component';

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
