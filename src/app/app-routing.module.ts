import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'paginas',
    component: AppComponent, // Un layout para las rutas de administración
  children: [
      {
        path: '',
        children: [
          {
            path: 'posts',
            loadChildren: () => import('./pages/post/post.module').then(m=> m.PostModule),
          },
        ]
      }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
