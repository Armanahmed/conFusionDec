import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dish: Dish;
	promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;
	
  constructor(private dishservice: DishService, private promotionservice: PromotionService, private leaderservice: LeaderService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errMess => this.dishErrMess = `${errMess.status} - ${errMess.statusText}`);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, errMess => this.promotionErrMess = `${errMess.status} - ${errMess.statusText}`);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader, errMess => this.leaderErrMess = `${errMess.status} - ${errMess.statusText}`);
  }

}
