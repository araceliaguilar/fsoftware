import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from '../../components/table/table.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
// import { TableComponent } from '../../components/table/table.component'; // Ya lo importa SharedModule

@NgModule({
  declarations: [
    // ListComponent, // ¡Descomenta y declara ListComponent!
  
    // ViewpostComponent
  ],
  imports: [
    CommonModule,
    SharedModule, // Ahora SharedModule exporta TableComponent
    PostRoutingModule,
    TableComponent,
    ListComponent,
    ViewpostComponent
  ]
})
export class PostModule { }
