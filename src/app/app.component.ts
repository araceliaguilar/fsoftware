import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fs-project';
  mostrarInicio = true;
  private primeraNavegacion = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Si no es la primera carga y la URL es diferente de la inicial, ocultar
      if (this.primeraNavegacion && event.url !== '/') {
        this.mostrarInicio = false;
        this.primeraNavegacion = false;
      } else if (event.url === '/paginas/posts') {
        this.mostrarInicio = false;
        this.primeraNavegacion = false;
      }
    });
  }

  navegarAPosts() {
    this.mostrarInicio = false;
    this.router.navigate(['/paginas/posts']);
  }
}
