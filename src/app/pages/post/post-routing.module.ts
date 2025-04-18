import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { ViewpostComponent } from "./components/viewpost/viewpost.component";

const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'listar', component: ListComponent },
        { path: 'view/:id', component: ViewpostComponent },
        { path: '**', redirectTo: 'listar' }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PostRoutingModule { }
  