import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  constructor(
    private router: Router,
    ) {}

  message(num: string){
    switch (num){
      case "1": 
        this.router.navigateByUrl('message', { state : {
          recipient : 'MFMzKGBkrDS8RrKydf4oAb4gkA33' 
        }});
        break;

      case "2": 
        this.router.navigateByUrl('message', { state : {
          recipient : 'P2raL4k9TeUySA1Sy089ukyK7VW2'
        }});
        break;

      case "3": 
        this.router.navigateByUrl('message', { state : {
          recipient : 'iwzq0nMDESZ9E7u1xcmS6NvXDod2'
        }});
        break;
        
      case "4": 
        this.router.navigateByUrl('message', { state : {
          recipient : '5JBulkwZnhY0mKJrGOoKZPsznfz1'
        }});
        break;

      case "5": 
        this.router.navigateByUrl('message', { state : {
          recipient : 'yYa2UK7zmlVAi0NihYzdB45Ftsj1'
        }});
        break;

      case "6": 
        this.router.navigateByUrl('message', { state : {
          recipient : 'k2BciQhG4cNZsJdcjDhLqndtAjE2'
        }});
        break;
    }
  };

  goto(num: string){
    switch (num){
      case "1": 
        this.router.navigateByUrl('home/meals', { state : {
          'Dining Hall' : 'Convocation'
        }});
        break;

      case "2": 
        this.router.navigateByUrl('home/meals', { state : {
          'Dining Hall' : 'Ernest Oppenheimer'
        }});
        break;

      case "3": 
        this.router.navigateByUrl('home/meals', { state : {
          'Dining Hall' : 'Highfield'
        }});
        break;
      
      case "4": 
        this.router.navigateByUrl('home/meals', { state : {
          'Dining Hall' : 'Jubilee'
        }});
        break;

      case "5": 
        this.router.navigateByUrl('home/meals', { state : {
          'Dining Hall' : 'Knockando'
        }});
        break;

      case "6": 
        this.router.navigateByUrl('home/meals', { state : {
          'Dining Hall' : 'Main'
        }});
        break;
    }
  }

  ngOnInit() {
  }

}
