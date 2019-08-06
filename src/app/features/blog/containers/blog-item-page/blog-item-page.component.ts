import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/service/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-item-page',
  templateUrl: './blog-item-page.component.html',
  styleUrls: ['./blog-item-page.component.scss'],
})
export class BlogItemPageComponent implements OnInit {

  post$: Observable<any>;
  comments$: Observable<any[]>;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _http: HttpService
  ) { }

  ngOnInit() {
    const {id = null} = this._route.snapshot.params;
    if (!id) this._router.navigateByUrl('blog');
    this.post$ = this._http.get('https://jsonplaceholder.typicode.com/posts/' + id);
    this.comments$ = this._http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id).pipe(map((res: any[]) => res));
  }

}
