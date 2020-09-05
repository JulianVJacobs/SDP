import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseServicePage } from './choose-service.page';

describe('ChooseServicePage', () => {
  let component: ChooseServicePage;
  let fixture: ComponentFixture<ChooseServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
