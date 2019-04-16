import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { HomePageComponent } from './home-page/home-page.component'

const routes: Routes = [
  { path: 'user/:userId/:userName', component: HomePageComponent },
  { path: '', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
