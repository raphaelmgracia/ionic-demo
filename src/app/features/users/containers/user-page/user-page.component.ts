import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/service/http.service';
import { Observable } from 'rxjs';
import { find, flatMap, switchMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {

  user$: Observable<any>;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    const { id = null} = this._route.snapshot.params;
    if (!id) this._router.navigateByUrl('blog');
    this.user$ = this._http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
