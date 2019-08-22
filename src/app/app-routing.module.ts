import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./survey-one/survey-one.module').then(m => m.SurveyOnePageModule)
  },
  { path: 'my-test-page', loadChildren: './my-test-page/my-test-page.module#MyTestPagePageModule' },
  { path: 'contact', component: ContactComponent },
  { path: 'survey-one', loadChildren: './survey-one/survey-one.module#SurveyOnePageModule' },
  { path: 'survey-two', loadChildren: './survey-two/survey-two.module#SurveyTwoPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
