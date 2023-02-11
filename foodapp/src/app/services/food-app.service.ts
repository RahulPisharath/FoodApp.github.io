import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Food } from 'src/app/models/Food';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoodAppService {

  constructor(private http: HttpClient) { }

  getFoodMenu(): Observable<any> {
    return this.http.get(environment.API__URL).pipe(map(res => res));
  }

}
