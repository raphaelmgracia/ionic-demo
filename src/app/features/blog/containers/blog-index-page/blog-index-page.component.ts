import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-index-page',
  templateUrl: './blog-index-page.component.html',
  styleUrls: ['./blog-index-page.component.scss'],
})
export class BlogIndexPageComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
