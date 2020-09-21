import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { BookMessagePage } from './book-message.page';

describe('BookMessagePage', () => {
  let component: BookMessagePage;
  let fixture: ComponentFixture<BookMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
