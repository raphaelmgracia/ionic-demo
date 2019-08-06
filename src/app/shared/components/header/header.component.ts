import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() backBtn: boolean = false;
  constructor(private _location: Location) { }

  ngOnInit() {}

  back(){
    console.log('TODO: back with router or Location (angular)...');
    this._location.back();
  }
}
