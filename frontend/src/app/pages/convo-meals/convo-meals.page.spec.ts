import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvoMealsPage } from './convo-meals.page';

describe('ConvoMealsPage', () => {
  let component: ConvoMealsPage;
  let fixture: ComponentFixture<ConvoMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvoMealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvoMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
