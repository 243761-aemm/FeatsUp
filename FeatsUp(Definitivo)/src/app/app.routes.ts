import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida.component').then(m => m.BienvenidaComponent)
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./pages/iniciar-sesion/iniciar-sesion.component').then(m => m.IniciarSesionComponent)
  },
  {
    path: 'crear-cuenta',
    loadComponent: () => import('./pages/crear-cuenta/crear-cuenta.component').then(m => m.CrearCuentaComponent)
  },
  {
    path: 'mis-reservaciones',
    loadComponent: () => import('./pages/mis-reservaciones/mis-reservaciones.component').then(m => m.MisReservacionesComponent)
  },
  {
    path: 'nueva-reservacion',
    loadComponent: () => import('./pages/nueva-reservacion/nueva-reservacion.component').then(m => m.NuevaReservacionComponent)
  },
  {
    path: 'confirmacion-reservacion',
    loadComponent: () => import('./pages/confirmacion-reservacion/confirmacion-reservacion.component').then(m => m.ConfirmacionReservacionComponent)
  },
  {
    path: 'gestionar-reservaciones',
    loadComponent: () => import('./pages/gestionar-reservaciones/gestionar-reservaciones.component').then(m => m.GestionarReservacionesComponent)
  },
  {
    path: '**',
    redirectTo: '/bienvenida'
  }
];