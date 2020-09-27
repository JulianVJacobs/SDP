import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDetailsPage } from './edit-details.page';

describe('EditDetailsPage', () => {
  let component: EditDetailsPage;
  let fixture: ComponentFixture<EditDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-card>', () => {
    expect(fixture.nativeElement.querySelector('ion-card')).toBeTruthy();
  });
  
  it('should have at least one <ion-item>', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });
  
  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });
  
  it('should have a doneAction() function', () => {
    expect(component.doneAction).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Edit Your Details" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Edit Your Details");
    });
  });
  
  describe('Done <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
     expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].expand).toBe('block');
    });

    it('should have the text "Done"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].textContent).toBe("Done");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button')[0].click).toBeTruthy();
    });

    it('should call doneAction() when clicked', () => {
      let spy = spyOn(component,'doneAction');
      fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
      expect(component.doneAction).toHaveBeenCalled();
    });
  });
  
  it('should navigate to /main-tabs on Done button click', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'doneAction');
    fixture.nativeElement.getElementsByTagName('ion-button')[0].click();
    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree(['/main-tabs']), { skipLocationChange:false, replaceUrl:false});
  });
});
