import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-books',
  templateUrl: './sell-books.page.html',
  styleUrls: ['./sell-books.page.scss'],
})
export class SellBooksPage implements OnInit {
  public data = {
    meta: {

    },
    data: {
      Description: '',
      Image: '',
      Owner: '',
      Price: '',
      Title: ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
