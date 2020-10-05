import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { BuyBooksPage } from './buy-books.page';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { throwError } from 'rxjs';
import { doesNotThrow } from 'assert';
import { userInfo } from 'os';

class mockAuth extends AngularFireAuth{
  public currentUser: any = {
    then: () => {
      return new Promise((res) => {
        res({
          uid: 'user'
        });
      });
    }
  };
}

@Component ({'template':''})
class ItemComponent{
  id : "";
  Description :"The greatest there ever was";
  Owner : "uvhnoeasb9NNd2siozoXR71t8LH2";
  Price : 20;

  constructor(){}
}

fdescribe('BuyBooksPage', () => {
  let component: BuyBooksPage;
  let fixture: ComponentFixture<BuyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        NgModule,
        IonicModule.forRoot(), 
        RouterTestingModule,
        HttpClientTestingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule,
        ToastService
      

      ],
      providers: [
       { provide: AngularFireAuth, useClass: mockAuth }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should have an <h2> tag if there is a user', () => {
    component.user = {
      'Student Number' : '',
      Name: '',
      Surname: '',
      Role: 0,
      Campus: '',
      Res: '',
      Orders: [],
      'Res Number': '',
      'Phone number': '',
      'Amount Left': 0
   }; 
    expect(fixture.nativeElement.querySelector('h2')).toBeTruthy();
  });
  
  it('should have a message() function', () => {
    expect(component.message).toBeTruthy();
  });
  
  it('should have a constructor() function', () => {
    expect(component.constructor).toBeTruthy();
  });
  
  it('should have a buy() function', () => {
    expect(component.buy).toBeTruthy();
  });
  
  describe('buy', () => {
    let component: BuyBooksPage;
    let fixture: ComponentFixture<BuyBooksPage>;


    beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [
              NgModule,
              RouterTestingModule,
              //ToastService
          ],
          declarations:[ItemComponent],
    providers: [    {provide: ToastService, useValue: true } ]
          }).compileComponents();

    fixture = TestBed.createComponent(BuyBooksPage);
            component = fixture.componentInstance;
            fixture.detectChanges();
        }))

     const item = new ItemComponent;  

    it('Should produce a toaster',()=>{
      component.user = {
        'Student Number' : '',
        Name: '',
        Surname: '',
        Role: 0,
        Campus: '',
        Res: '',
        Orders: [],
        'Res Number': '',
        'Phone number': '',
        'Amount Left': 0
      }; 
      component.user["Amount Left"]=500;

      //let authService = TestBed.get(AuthService);
      let toastService = TestBed.get(ToastService);
      spyOn(toastService, 'presentToast');
      component.buy(item);
      expect(toastService.presentToast).toHaveBeenCalledWith("Successful purchase");
    })
    

  });
  
  
  
});


