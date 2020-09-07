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
  
  it('should have an foodAction() function', () => {
    expect(component.foodAction).toBeTruthy();
  });
  
  it('should have an bookAction() function', () => {
    expect(component.bookAction).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-card> tag', () => {
    expect(fixture.nativeElement.querySelector('ion-card')).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Choose a Service" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Choose a Service");
    });
  });
});
