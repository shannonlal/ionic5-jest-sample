import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomePage as TestedComponent } from './home.page';
import { ExchangeRates } from './models';
import { ExhangeRateService } from './service/exchange-rate.service';

const httpMockClient = {
  get: jest.fn()
};

const mockExchangeRateService = {
  getExchangeRates(): Observable<ExchangeRates>{
    return;
  }
} as any;

describe('HomePage Page', () => {
  let component: TestedComponent;

  beforeEach(() => {
    component = new TestedComponent(mockExchangeRateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get empty rates', () => {
    expect(component.rates.length).toBe(0);
  });
});


describe('HomePage snapshot testing', () => {
  let component: TestedComponent;
  let fixture: ComponentFixture<TestedComponent>;

  beforeEach(async(() => {
    try{
    TestBed.configureTestingModule({
      declarations: [ TestedComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ExhangeRateService, useValue: mockExchangeRateService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestedComponent);
    console.log( 'fixture', fixture );
    component = fixture.componentInstance;
    console.log( 'comp', component);
    fixture.detectChanges();
  }catch(err){
    console.log(err);
  }
  }));

  it('should create', () => {

    console.log(component );
    expect(component).toBeTruthy();
  });
});
