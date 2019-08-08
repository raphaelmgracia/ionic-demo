import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  public image: string;

  constructor() { }

  ngOnInit() {}

  tackPicture() {
    console.log('tackPicture....');
  }
}
