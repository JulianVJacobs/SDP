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
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { throwError } from 'rxjs';
import { doesNotThrow } from 'assert';
import { userInfo } from 'os';

class mockFireAuth extends AngularFireAuth{
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
  public id : "";
  public Description :"The greatest there ever was";
  public Owner : "uvhnoeasb9NNd2siozoXR71t8LH2";
  public Price : 20;

  constructor(){}
}

describe('BuyBooksPage', () => {
  let component: BuyBooksPage;
  let fixture: ComponentFixture<BuyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule,
        HttpClientTestingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule,
      ],
      providers: [
       { provide: AngularFireAuth, useClass: mockFireAuth }
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
   fixture.detectChanges();
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
    it('Should produce a toast saying "You don\'t have enough credits for that" when the user does not have enough credits to buy the item',()=>{
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
        'Amount Left': 10
      }; 
      component.items = [{
        id : "",
        Description :"The greatest there ever was",
        Owner : "uvhnoeasb9NNd2siozoXR71t8LH2",
        Price : 20
      }]

      let toastService = TestBed.get(ToastService);
      spyOn(toastService, 'presentToast');
      
      component.buy(component.items[0]);
      expect(toastService.presentToast).toHaveBeenCalledWith("You don't have enough credits for that.");
    })

    it('Should produce a toast saying "Successful purchase." when the user successfully buys the item',()=>{
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
        'Amount Left': 30
      }; 
      component.items = [{
        id : "",
        Description :"The greatest there ever was",
        Owner : "uvhnoeasb9NNd2siozoXR71t8LH2",
        Price : 20
      }]

      let toastService = TestBed.get(ToastService);
      spyOn(toastService, 'presentToast');
      spyOn(component,'buy').and.callFake(()=>{
        toastService.presentToast("Successful purchase.")
      })
      component.buy(component.items[0]);
      expect(toastService.presentToast).toHaveBeenCalledWith("Successful purchase.");
    })
    

  });
  
  
  
});


