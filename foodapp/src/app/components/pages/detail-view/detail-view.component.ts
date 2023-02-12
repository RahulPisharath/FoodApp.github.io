import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../../models/Food';
import { FoodAppService } from '../../../services/food-app.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit  {

  errorMEssage: any;
  restaurant: Food | undefined;

  constructor(private route: ActivatedRoute,
    private api: FoodAppService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }


  getProduct(id:number): void {
    this.api.getFoodMenu(id).subscribe({
      next: item => this.restaurant = item,
      error: err => this.errorMEssage = err
    })
    console.log(this.restaurant);
  }

}
