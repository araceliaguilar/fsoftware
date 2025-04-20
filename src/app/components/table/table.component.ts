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
  encabezado: string;
  id: string;  
  botonVer?: boolean;
  detalleRuta?: string;
}

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges{
  

  @Input() data: any[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() errorMessage: string = '';

  @Output() rowClick = new EventEmitter<any>();

  displayedColumns: ColumnDefinition[] = [];
  hasDetailButtonColumn: boolean = false;
  detailRoute: string | undefined; 

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.filter(col => col.encabezado && col.id);
      const detailColumn = this.columns.find(col => col.botonVer && col.detalleRuta);
      this.detailRoute = detailColumn?.detalleRuta;
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
