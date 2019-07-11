import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
const routes: Routes = [
  { path:"server" ,component:ServerComponent},
  { path:"user",component:UserComponent},
  {path:"posts",component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
