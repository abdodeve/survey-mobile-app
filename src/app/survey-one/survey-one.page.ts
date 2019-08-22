import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-one',
  templateUrl: './survey-one.page.html',
  styleUrls: ['./survey-one.page.scss'],
})
export class SurveyOnePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    console.log("hello");
  }

}
