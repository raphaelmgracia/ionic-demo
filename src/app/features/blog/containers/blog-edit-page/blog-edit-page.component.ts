import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-edit-page',
  templateUrl: './blog-edit-page.component.html',
  styleUrls: ['./blog-edit-page.component.scss'],
})
export class BlogEditPageComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(
        ['hello'],
        Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ),
      body: new FormControl()
    });
  }

  submit() {
    if (!this.form.valid) {
      console.log(this.form);
      return;
    }
    console.log('TODO: make request to API...');
  }
}
