import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CvComponent } from './components/cv/cv.component';
import { LandpageComponent } from './components/landpage/landpage.component';

const routes: Routes = [
  { path: '', component: LandpageComponent},
  { path: 'cv', component: CvComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
