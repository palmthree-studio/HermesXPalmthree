import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {path:"", component:IntroductionComponent},
  {path:"introduction", component:IntroductionComponent},
  {path:"quizz", component:QuizzComponent},
  {path:"result", component:ResultComponent},
  {path:"product-page", component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
