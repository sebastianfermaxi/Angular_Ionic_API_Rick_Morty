import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutPageModule),
  },
  {
    path: 'usuario/:id',
    loadChildren: () =>
      import('./usuario/usuario.module').then((m) => m.UsuarioPageModule),
  },
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
