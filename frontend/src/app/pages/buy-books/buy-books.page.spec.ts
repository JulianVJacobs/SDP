import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyBooksPage } from './buy-books.page';

describe('BuyBooksPage', () => {
  let component: BuyBooksPage;
  let fixture: ComponentFixture<BuyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
