import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { SellBooksPage } from './sell-books.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SellBooksPage', () => {
  let component: SellBooksPage;
  let fixture: ComponentFixture<SellBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(),RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SellBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
