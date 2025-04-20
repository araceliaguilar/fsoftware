import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TableComponent } from "../components/table/table.component";

@NgModule({
  declarations: [
    TableComponent
  ],
  providers: [],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    TableComponent,
  ]
})
export class SharedModule {
}