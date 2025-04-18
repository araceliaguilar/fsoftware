import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TableComponent } from "../components/table/table.component";

@NgModule({
  declarations: [
    // TableComponent, // ¡Declara TableComponent aquí!
  ],
  providers: [],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    TableComponent
  ],
  exports: [
    MaterialModule,
    TableComponent, // ¡Exporta TableComponent aquí para que otros módulos lo usen!
  ]
})
export class SharedModule {
}