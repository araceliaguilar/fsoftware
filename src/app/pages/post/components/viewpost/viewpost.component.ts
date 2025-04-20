import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../model/post.model';

@Component({
  selector: 'app-viewpost',
  standalone: false,
  templateUrl: './viewpost.component.html',
  styleUrl: './viewpost.component.css'
})
export class ViewpostComponent {
  postId: number = 0;
  post: PostModel | undefined;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.cargarDetalles();
    });
  }

  cargarDetalles(): void {
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

  volver(): void {
    this.router.navigate(['/paginas/posts']);
    console.log('Volver');
  }
}
