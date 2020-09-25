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
  
  it('should have at least one <ion-header>', () => {
    expect(fixture.nativeElement.querySelector('ion-header')).toBeTruthy();
  });
  
  it('should have at least one <ion-toolbar>', () => {
    expect(fixture.nativeElement.querySelector('ion-toolbar')).toBeTruthy();
  });
  
  it('should have at least one <ion-title>', () => {
    expect(fixture.nativeElement.querySelector('ion-title')).toBeTruthy();
  });
  
  describe('<ion-title>', () => {
    it('should have the text "dh-message" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('ion-title').textContent).toBe("dh-message");
    });
  });
});
