import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/Food';
import { FoodAppService } from 'src/app/services/food-app.service';
import { environment } from 'src/environments/environment';


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
