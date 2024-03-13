import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"pagina1", loadComponent:()=>import('./pages/pagina1/pagina1.component')
      .then(c=>c.Pagina1Component)
  }
];
