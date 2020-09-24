import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.page.html',
  styleUrls: ['./edit-details.page.scss'],
})
export class EditDetailsPage implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  doneAction(){
    this.router.navigate(['main-tabs'])
  }

}
