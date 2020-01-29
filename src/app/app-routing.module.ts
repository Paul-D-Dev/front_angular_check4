import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalCircusComponent } from './pages/local-circus/local-circus.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/circus' },
  { path: 'circus', component: LocalCircusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
