import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './component/project/project.component';
import { ListComponent } from './component/list/list.component';
import { ItemComponent } from './component/item/item.component';

const routes: Routes = [
  {path:'',component:ProjectComponent},
  {path:'project/:id',component:ListComponent},
  {path:'list/:id',component:ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
