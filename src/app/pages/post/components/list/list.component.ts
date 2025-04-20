import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { TableComponent } from "../../../../components/table/table.component";
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../../environments/environment';
import { PostModel } from '../../model/post.model';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  posts: PostModel[] = [];
  errorMessage: string = '';
  postTableColumns = [
    { encabezado: 'Título', id: 'title' },
    { encabezado: 'User ID', id: 'userId' },
    { encabezado: 'Acciones', id: '', botonVer: true, detalleRuta: 'posts/view' }
  ];

  constructor(
    public postService : PostService
  ) { 
    // console.log('constructor')
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
        // console.log(this.posts)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
