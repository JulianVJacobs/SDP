import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toast.service';
import { MealsPage } from './meals.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from 'src/environments/environment';

describe('MealsPage', () => {
  let component: MealsPage;
  let fixture: ComponentFixture<MealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule, 
        HttpClientTestingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should have a orderAction() function', () => {
    expect(component.orderAction).toBeTruthy();
  });

  it('should have a submit() function', () => {
    expect(component.submit).toBeTruthy();
  });

  it('it should present a "Order placed" toast when orderAction is clicked', () => {
    let toastService = TestBed.get(ToastService);
      spyOn(toastService, 'presentToast');
      
      component.orderAction("");
      expect(toastService.presentToast).toHaveBeenCalledWith("Order Placed");
  })

  it('it should present a "Review submitted." toast when submit is clicked', () => {
    let toastService = TestBed.get(ToastService);
      spyOn(toastService, 'presentToast');
      
      component.submit("");
      expect(toastService.presentToast).toHaveBeenCalledWith("Review submitted.");
  })

});
