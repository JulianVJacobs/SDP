import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhMessagePage } from './dh-message.page';

describe('DhMessagePage', () => {
  let component: DhMessagePage;
  let fixture: ComponentFixture<DhMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  
});
