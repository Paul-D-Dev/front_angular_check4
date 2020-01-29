import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalCircusComponent } from './pages/local-circus/local-circus.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';


const routes: Routes = [
  { path: 'circus', component: LocalCircusComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'billeterie', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
