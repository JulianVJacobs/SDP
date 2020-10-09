import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { EditDetailsPage } from './edit-details.page';

describe('EditDetailsPage', () => {
  let component: EditDetailsPage;
  let fixture: ComponentFixture<EditDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailsPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule, 
        RouterTestingModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterModule
      ]
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
  
});
