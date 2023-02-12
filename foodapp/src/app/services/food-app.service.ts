import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Food } from '../models/Food';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoodAppService {
  private API_URL = environment.API__URL;
  products: any;

  constructor(private http: HttpClient) { }

  getFoodMenu(): Observable<any> {
    return this.http.get(environment.API__URL)
      .pipe(map(res => res));
  }

}
