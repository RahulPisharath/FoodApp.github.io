import { Component, OnInit } from '@angular/core';
import { FoodAppService } from '../../../services/food-app.service';
import { environment } from 'src/environments/environment';
import { Food } from './../../../models/Food';


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
 
})

export class HomeComponent implements OnInit {
  users:any;
  
  constructor(private api:FoodAppService) { }

  ngOnInit() {
    this.api.getFoodMenu().subscribe(res=>{
      this.users = res?.data?.cards[2]?.data?.data?.cards;
      console.log('Data response===>', this.users);
    })
  }

}
