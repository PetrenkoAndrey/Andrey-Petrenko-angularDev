import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherPageComponent,
    data: { title: 'Weather' }
  },
  {
    path: 'favorites',
    component: FavoritePageComponent,
    data: { title: 'Favorites' }
  },

  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
