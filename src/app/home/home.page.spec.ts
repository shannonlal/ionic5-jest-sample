import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomePage } from './home.page';
import { ExchangeRates } from './models';
import { ExhangeRateService } from './service/exchange-rate.service';
jest.mock( './service/exchange-rate.service');

/*class MockExchangeRateService {
  getExchangeRates(): Observable<ExchangeRates>{
    return;
  }
}*/

const httpMockClient = {
  get: jest.fn()
};
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {

    let httpMock: HttpTestingController;
    //const service = new ExhangeRateService(httpMockClient as any);
    /*const exchangeRateService = {
      getExchangeRates: jest.fn()
    };*/

    //const exchangeRateService = new MockExchangeRateService();

    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [ ExhangeRateService ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
