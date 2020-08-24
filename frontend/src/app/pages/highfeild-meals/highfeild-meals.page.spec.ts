import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HighfeildMealsPage } from './highfeild-meals.page';

describe('HighfeildMealsPage', () => {
  let component: HighfeildMealsPage;
  let fixture: ComponentFixture<HighfeildMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighfeildMealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HighfeildMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
