import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRates } from './models';
import {ExhangeRateService} from './service/exchange-rate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( ) {
    //this.getExchangeRates();
  }

  public exchangeRate: ExchangeRates;

  public rates: {key: string; value: string}[] = [];

  //public getExchangeRates() {

  /*  this.exchangeRateService.getExchangeRates().subscribe( ( exchange: ExchangeRates ) => {
      this.exchangeRate = exchange;

      const rateKeys = Object.keys(this.exchangeRate.rates);

      rateKeys.map( key => {
        this.rates.push({key, value: this.exchangeRate.rates[key]});
      });

      console.log( 'rate keys', this.rates);

    });*/
  //}

}
