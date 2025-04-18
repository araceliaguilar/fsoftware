import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../model/post.model';

@Component({
  selector: 'app-viewpost',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './viewpost.component.html',
  styleUrl: './viewpost.component.css'
})
export class ViewpostComponent {
  postId: number = 0;
  post: PostModel | undefined;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.getPostDetails();
    });
  }

  getPostDetails(): void {
    this.postService.getPostsDetalle(this.postId).subscribe(
      (post) => {
        this.post = post;
      },
      (error) => {
        this.errorMessage = 'Error al cargar los detalles del post.';
        console.error(error);
      }
    );
  }

  goBack(): void {
    // Implementa la lógica para volver a la página anterior (ej., usando Router)
    console.log('Volver');
  }
}
