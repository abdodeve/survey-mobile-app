import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyTwoPage } from './survey-two.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyTwoPage]
})
export class SurveyTwoPageModule {}
