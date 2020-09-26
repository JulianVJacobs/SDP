import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPage ],
      imports: [
        IonicModule.forRoot(), 
        HttpClientTestingModule,
        RouterTestingModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-header>', () => {
    expect(fixture.nativeElement.querySelector('ion-header')).toBeTruthy();
  });
  
  it('should have at least one <ion-content>', () => {
    expect(fixture.nativeElement.querySelector('ion-content')).toBeTruthy();
  });
  
  it('should have at least one <ion-label>', () => {
    expect(fixture.nativeElement.querySelector('ion-label')).toBeTruthy();
  });
  
  it('should have a message() function', () => {
    expect(component.message).toBeTruthy();
  });
  
  it('should have a goto() function', () => {
    expect(component.goto).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Choose Dining Hall" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Choose Dining Hall");
    });
  });
  
  describe('Contact <ion-button>', () => {
    it('should have an expand property', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').expand).toBeTruthy();
    });

    it('should have an expand property set to block', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').expand).toBe('block');
    });

    it('should have the text "Order"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').textContent).toBe("Contact");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-button').click).toBeTruthy();
    });

    it('should call message() when clicked', () => {
      let spy = spyOn(component,'message');
      fixture.nativeElement.getElementsByTagName('ion-button').click();
      expect(component.message).toHaveBeenCalled();
    });
  });
  
  describe('EOH <ion-label>', () => {

    it('should have the text "EOH"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[0].textContent).toBe("EOH");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[0].click).toBeTruthy();
    });

    it('should call goto() when clicked', () => {
      let spy = spyOn(component,'goto');
      fixture.nativeElement.getElementsByTagName('ion-label')[0].click();
      expect(component.goto).toHaveBeenCalled();
    });
  });
  
  describe('Highfield <ion-label>', () => {

    it('should have the text "Highfield"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[1].textContent).toBe("Highfield");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[1].click).toBeTruthy();
    });

    it('should call goto() when clicked', () => {
      let spy = spyOn(component,'goto');
      fixture.nativeElement.getElementsByTagName('ion-label')[1].click();
      expect(component.goto).toHaveBeenCalled();
    });
  });
  
  describe('Jubilee <ion-label>', () => {

    it('should have the text "Jubilee"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[2].textContent).toBe("Jubilee");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[2].click).toBeTruthy();
    });

    it('should call goto() when clicked', () => {
      let spy = spyOn(component,'goto');
      fixture.nativeElement.getElementsByTagName('ion-label')[2].click();
      expect(component.goto).toHaveBeenCalled();
    });
  });
  
  describe('Knockando <ion-label>', () => {

    it('should have the text "Knockando"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[3].textContent).toBe("Knockando");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[3].click).toBeTruthy();
    });

    it('should call goto() when clicked', () => {
      let spy = spyOn(component,'goto');
      fixture.nativeElement.getElementsByTagName('ion-label')[3].click();
      expect(component.goto).toHaveBeenCalled();
    });
  });
  
  describe('Main <ion-label>', () => {

    it('should have the text "Main"', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[4].textContent).toBe("Main");
    });

    it('should have a click event', () => {
      expect(fixture.nativeElement.getElementsByTagName('ion-label')[4].click).toBeTruthy();
    });

    it('should call goto() when clicked', () => {
      let spy = spyOn(component,'goto');
      fixture.nativeElement.getElementsByTagName('ion-label')[4].click();
      expect(component.goto).toHaveBeenCalled();
    });
  });
});
