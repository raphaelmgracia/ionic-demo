import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdatesNotificationComponent } from './components/updates-notification/updates-notification.component';
import { IonicModule } from '@ionic/angular';

const COMPONENTS = [
  UpdatesNotificationComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    IonicModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
