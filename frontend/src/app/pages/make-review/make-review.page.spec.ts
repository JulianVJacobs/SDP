import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeReviewPage } from './make-review.page';

describe('MakeReviewPage', () => {
  let component: MakeReviewPage;
  let fixture: ComponentFixture<MakeReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
