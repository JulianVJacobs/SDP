import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";
import { MainMealsPage } from './main-meals.page';

describe('MainMealsPage', () => {
  let component: MainMealsPage;
  let fixture: ComponentFixture<MainMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMealsPage ],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
