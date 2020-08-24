import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EohMealsPage } from './eoh-meals.page';

describe('EohMealsPage', () => {
  let component: EohMealsPage;
  let fixture: ComponentFixture<EohMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EohMealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EohMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
