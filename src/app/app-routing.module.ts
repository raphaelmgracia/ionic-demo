import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then( m => m.HomePageModule)},
  { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then( m => m.BlogModule)},
  { path: 'users', loadChildren: () => import('./features/users/users.module').then( m => m.UsersModule)},
  { path: 'native', loadChildren: () => import('./features/native-demo/native-demo.module').then( m => m.NativeDemoModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
