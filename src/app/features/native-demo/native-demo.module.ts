import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NativeDemoRoutingModule } from './native-demo-routing.module';
import { CameraComponent } from './components/camera/camera.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    SharedModule,
    NativeDemoRoutingModule
  ]
})
export class NativeDemoModule { }
