import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandindComponent } from './components/landind/landind.component';

const routes: Routes = [
  { path: '', component: LandindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
