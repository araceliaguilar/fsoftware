import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Modulo para simular el enrutador
import { Router } from '@angular/router'; // Servicio del enrutador que vamos a espiar
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { DebugElement } from '@angular/core'; // Clase para inspeccionar elementos en el DOM de prueba
import { By } from '@angular/platform-browser';  // Clase para buscar elementos en el DOM de prueba
import { Component } from '@angular/core';

// Declaracion de un componente mock (falso) para configurar las rutas de prueba
@Component({ template: '' }) // Decorador necesario para que la clase sea reconocida como un componente por el enrutador de prueba
class MockComponent {}

describe('AppComponent', () => {
  // Declaracion de variables que se utilizaran en las pruebas
  let component: AppComponent; // Instancia de AppComponent
  let fixture: ComponentFixture<AppComponent>; //Entorno de prueba
  let router: Router; //Instancia servicio
  let debugElement: DebugElement; //Para acceder al DOM del componente de prueba

  // Se ejecuta antes de cada prueba it
  beforeEach(async () => {
    // Configura el entorno de pruebas
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([ //Importa el modulo de enrutamiento de prueba con rutas simuladas
          { path: 'paginas/posts', component: MockComponent } 
        ]),
        MatButtonModule
      ],
      declarations: [
        AppComponent //Componente que vamos a probar
      ],
      providers: []
    }).compileComponents(); //Compila los templates y los CSS del componente

    //Crea una instancia del componente AppComponent y su fixture
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); //Es el spy que se configuro
    debugElement = fixture.debugElement;
    fixture.detectChanges(); // Ejecuta la deteccion de cambios inicial para renderizar el componente
    await fixture.whenStable(); // Espera a que se completen las tareas asincronas iniciales
  });

   // Prueba para verificar si el componente se crea correctamente
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

   // Prueba para verificar si la propiedad titulo del componente tiene el valor esperado
  it(`should have as title 'fs-project'`, () => {
    expect(component.title).toEqual('fs-project');
  });

  // Prueba para verificar si el titulo se renderiza correctamente en el template inicial
  it('should render title initially', () => {
    const titleElement = debugElement.nativeElement.querySelector('h1'); //busca el elemento
    expect(titleElement.textContent).toContain('Proyecto prueba Software Foca'); //verifica
  });

   // Prueba para verificar si el boton "Mostrar datos" se renderiza correctamente en el template inicial
  it('should render the "Mostrar datos" button initially', () => {
    const buttonDebugElement = debugElement.query(By.css('button'));
    expect(buttonDebugElement).toBeTruthy('El botón debería existir');
    expect(buttonDebugElement.nativeElement.textContent).toContain('Mostrar datos');
  });

   // Prueba para simular el clic del boton y verificar la actualizacion 
  it('simula el click del boton y actualiza mostrarInicio', fakeAsync(() => {
    const navegarSpy = spyOn(component, 'navegarAPosts').and.callThrough(); //Crea el espia 
    const buttonDebugElement = debugElement.query(By.css('button')); //Busca
  
    expect(buttonDebugElement).toBeTruthy('El botón debería existir');
    expect(component.mostrarInicio).toBeTrue();  // Verifica que la propiedad mostrarInicio sea T inicialmente

  
    buttonDebugElement.triggerEventHandler('click', null); // Simula un evento de clic
    tick(); // Simula el paso del tiempo
    component.navegarAPosts(); 
    fixture.detectChanges(); // Fuerza la deteccion de cambios para actualizar el DOM de prueba
  
    expect(navegarSpy).toHaveBeenCalled(); // Verifica si el método navegarAPosts fue llamado
    expect(component.mostrarInicio).toBeFalse(); // Verifica si la propiedad mostrarInicio se actualizo a F
    const titleElement = debugElement.nativeElement.querySelector('h1'); 
    const buttonNewElement = debugElement.nativeElement.querySelector('button');
    expect(titleElement).toBeNull();
    expect(buttonNewElement).toBeNull();
  }));
  
});