import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { TableComponent } from "../../../../components/table/table.component";
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../../environments/environment';
import { PostModel } from '../../model/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule, TableComponent], // ¡Importa TableComponent aquí!
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  posts: PostModel[] = [];
  errorMessage: string = '';
  postTableColumns = [
    { header: 'Título', key: 'title' },
    // { header: 'Cuerpo', key: 'body' },
    { header: 'User ID', key: 'userId' },
    { header: 'Acciones', key: '', detailButton: true, detailRoute: 'posts/view' }
  ];

  constructor(
    public postService : PostService
  ) { 
    console.log('constructor')}
  ngOnInit(): void {
    console.log('init')
    this.getPosts()
    
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
        console.log(this.posts)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onPostRowClick(event:any): void {
    console.log('Fila de post clickeada:', event);
    // Aquí podrías implementar lógica adicional al hacer clic en una fila si lo necesitas
  }
}
