import { ExhangeRateService } from './exchange-rate.service';
import { HttpClient } from '@angular/common/http';
import { of as ObservableOf } from 'rxjs';
import { ExchangeRates } from '../models';

describe( 'Exchange Rate Service Test', () => {
    it('should ensure Exchange Rate Serivce Exists', () => {
        expect( ExhangeRateService ).toBeDefined();
    });

    it('should create an instance with mock httpclient', () => {
        const httpMockClient = {
            get: jest.fn()
        };

        const service = new ExhangeRateService(httpMockClient as any);

        expect( service ).toBeDefined();
    });

    it('should return mock response of exchange rate', async () => {

        const exchangeRate: ExchangeRates = {
            base: 'USD',
            date: '2020-09-26',
            time_last_updated: 1601078645,
            rates: {
                USD: 1,
                AED: 3.672041,
                ARS: 75.698367,
                AUD: 1.420493,
                BGN: 1.680068,
                BRL: 5.53712,
                BSD: 1,
                CAD: 1.337251,
                CHF: 0.927877,
                CLP: 785.493723,
                CNY: 6.825167,
                COP: 3752.47619,
                CZK: 23.247558,
                DKK: 6.39155,
                DOP: 57.942647,
                EGP: 15.71326,
                EUR: 0.858901,
                FJD: 2.146784,
                GBP: 0.784686,
                GTQ: 7.730233,
                HKD: 7.750516,
                HRK: 6.485108,
                HUF: 311.704994,
                IDR: 15032.010926,
                ILS: 3.479551,
                INR: 73.703374,
                ISK: 138.876594,
                JPY: 105.514292,
                KRW: 1175.093653,
                KZT: 425.956757,
                MVR: 15.33,
                MXN: 22.262063,
                MYR: 4.167725,
                NOK: 9.560165,
                NZD: 1.525871,
                PAB: 1,
                PEN: 3.586506,
                PHP: 48.506157,
                PKR: 164.857741,
                PLN: 3.907042,
                PYG: 7163.818182,
                RON: 4.185764,
                RUB: 77.528629,
                SAR: 3.750138,
                SEK: 9.122266,
                SGD: 1.376379,
                THB: 31.580413,
                TRY: 7.627833,
                TWD: 29.261735,
                UAH: 28.203163,
                UYU: 42.43511,
                ZAR: 17.041495
            }
        };
        const httpMockClient = {
            get: ObservableOf(exchangeRate)
        };

        const service = new ExhangeRateService(httpMockClient as any);

        expect( service ).toBeDefined();
        try{
            const rates: ExchangeRates = await service.getExchangeRates().toPromise();
            expect( rates ).toBeDefined();
            expect( rates.base ).toBe('USD');
            expect( rates.time_last_updated ).toBe(1601078645);
        }catch ( err ){
          console.log('Unexpected err', err);
            expect(err).toBeUndefined();
        }

    });
});
