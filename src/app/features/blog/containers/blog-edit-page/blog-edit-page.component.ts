import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-blog-edit-page',
  templateUrl: './blog-edit-page.component.html',
  styleUrls: ['./blog-edit-page.component.scss'],
})
export class BlogEditPageComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(
        'hello',
        Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ),
      body: new FormControl()
    });
  }

  async submit() {
    if (!this.form.valid) {
      console.log(this.form);
      return;
    }
    const {error = null, ...post} = await this._http.post({
      param: 'https://jsonplaceholder.typicode.com/posts',
      body: this.form.value
    }).toPromise().then((res: any) => res);
    if (error && post) {
      console.log('Error: ', error);
      return;
    }
    console.log('Success :', post);
  }
}
