import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../models';

const EXCHANGE_RATE_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

@Injectable()
export class ExhangeRateService {


  constructor(public http: HttpClient) {
  }

  getExchangeRates(): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(EXCHANGE_RATE_URL);
  }
}
