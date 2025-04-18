import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IBaseService } from '../../shared/services/interface/i-base.service';
import { FilterOptions } from '../../shared/utils/filter-options';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

interface ColumnDefinition {
  header: string;
  key: string;  
  detailButton?: boolean;
  detailRoute?: string;
}


@Component({
  selector: 'app-table',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule], // ¡Añade CommonModule a los imports!
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges{
  

  @Input() data: any[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() errorMessage: string = '';

  @Output() rowClick = new EventEmitter<any>();

  // Propiedad para almacenar las columnas que realmente se mostrarán
  displayedColumns: ColumnDefinition[] = [];
  hasDetailButtonColumn: boolean = false;
  detailRoute: string | undefined; // Almacenamos la ruta de detalle si existe

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.filter(col => col.header && col.key);
      const detailColumn = this.columns.find(col => col.detailButton && col.detailRoute);
      this.detailRoute = detailColumn?.detailRoute;
    }
  }

  onRowClick(item: any): void {
    this.rowClick.emit(item);
  }

  verDetalle(item: any): void {
    if (this.detailRoute && item && item.id !== undefined) {
      this.router.navigate(['/paginas/'+ this.detailRoute, item.id]);
    }
  }

  shouldShowDetailButton(): boolean {
    return !!this.detailRoute;
  }

  


}
