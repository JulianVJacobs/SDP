import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.page.html',
  styleUrls: ['./choose-service.page.scss'],
})
export class ChooseServicePage implements OnInit {

  constructor(
    private router: Router, 
    ) { }

  ngOnInit() {
  }

  foodAction(){
    
  }

  bookAction(){
    
  }

}
