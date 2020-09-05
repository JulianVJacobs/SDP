import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellBooksPage } from './sell-books.page';

describe('SellBooksPage', () => {
  let component: SellBooksPage;
  let fixture: ComponentFixture<SellBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
