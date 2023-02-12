import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../../models/Food';
import { Iproduct } from 'src/app/models/product';
import { FoodAppService } from '../../../services/food-app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit  {

  errorMEssage: any;
  product: Iproduct | undefined;
  movie: any;
  filteredData: any;


  constructor(private route: ActivatedRoute,
    private api: FoodAppService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(typeof(id));

  }

}

