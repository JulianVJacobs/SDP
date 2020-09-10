import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { BuyBooksPage } from './buy-books.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BuyBooksPage', () => {
  let component: BuyBooksPage;
  let fixture: ComponentFixture<BuyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Buy Books" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Buy Books");
    });
  });
});
