import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './components/camera/camera.component';


const routes: Routes = [
  {
    path: '',
    component: CameraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NativeDemoRoutingModule { }
