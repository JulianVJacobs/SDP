import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KnocksMealsPage } from './knocks-meals.page';

describe('KnocksMealsPage', () => {
  let component: KnocksMealsPage;
  let fixture: ComponentFixture<KnocksMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnocksMealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KnocksMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
