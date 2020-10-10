import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';

import { MessageListPage } from './message-list.page';

describe('MessageListPage', () => {
  let component: MessageListPage;
  let fixture: ComponentFixture<MessageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListPage ],
      imports: [
        IonicModule.forRoot(),
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call mainAction()', () => {
    component.mainAction();
    expect(component).toBeTruthy();
  });
});
