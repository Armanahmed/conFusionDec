import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';

import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
  	return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
  	return this.restangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
  	return this.restangular.all('promotions').getList({featured: true}).pipe(map(promotions => promotions[0]));
  }

}
