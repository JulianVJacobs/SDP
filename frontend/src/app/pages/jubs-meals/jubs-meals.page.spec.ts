import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JubsMealsPage } from './jubs-meals.page';

describe('JubsMealsPage', () => {
  let component: JubsMealsPage;
  let fixture: ComponentFixture<JubsMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JubsMealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JubsMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
