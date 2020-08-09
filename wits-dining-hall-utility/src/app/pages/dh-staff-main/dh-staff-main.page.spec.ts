import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhStaffMainPage } from './dh-staff-main.page';

describe('DhStaffMainPage', () => {
  let component: DhStaffMainPage;
  let fixture: ComponentFixture<DhStaffMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhStaffMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhStaffMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
