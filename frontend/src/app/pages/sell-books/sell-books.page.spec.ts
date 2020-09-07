import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellBooksPage } from './sell-books.page';

describe('SellBooksPage', () => {
  let component: SellBooksPage;
  let fixture: ComponentFixture<SellBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have an chooseFile() function', () => {
    expect(component.chooseFile).toBeTruthy();
  });
  
  it('should have an addBook() function', () => {
    expect(component.addBook).toBeTruthy();
  });
  
  it('should have an remove() function', () => {
    expect(component.remove).toBeTruthy();
  });
  
  it('should have at least one <h1> tag', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
  
  it('should have at least one <ion-list>', () => {
    expect(fixture.nativeElement.querySelector('ion-list')).toBeTruthy();
  });
  
  it('should have at least one <ion-item>', () => {
    expect(fixture.nativeElement.querySelector('ion-item')).toBeTruthy();
  });
  
  it('should have at least one <ion-button>', () => {
    expect(fixture.nativeElement.querySelector('ion-button')).toBeTruthy();
  });
  
  describe('<h1>', () => {
    it('should have the text "Sell Books" before ngOnInit() is called', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Sell Books");
    });
  });
});
