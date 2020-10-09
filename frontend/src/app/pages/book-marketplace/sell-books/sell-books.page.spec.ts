import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { SellBooksPage } from './sell-books.page';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

@Component ({'template':''})
class ItemComponent{
  public id : "";
  public Description :"The greatest there ever was";
  public Owner : "uvhnoeasb9NNd2siozoXR71t8LH2";
  public Price : 20;

  constructor(){}
}

describe('SellBooksPage', () => {
  let component: SellBooksPage;
  let fixture: ComponentFixture<SellBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule, 
        HttpClientTestingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SellBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should have a remove() function', () => {
    expect(component.remove).toBeTruthy();
  });

  it('should have a addBook() function', () => {
    expect(component.addBook).toBeTruthy();
  });

  it('Should say "Successful Upload" when addBook() is called', ()=>{
    let toastService = TestBed.get(ToastService);
      spyOn(toastService, 'presentToast');
      
      component.addBook();
      expect(toastService.presentToast).toHaveBeenCalledWith("Successful upload");
  });
  
});
