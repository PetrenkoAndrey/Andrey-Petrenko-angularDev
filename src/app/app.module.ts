import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FiveDaysWeatherComponent } from './components/five-days-weather/five-days-weather.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    FavoritePageComponent,
    NotFoundPageComponent,
    FavoriteItemComponent,
    ToolbarComponent,
    FiveDaysWeatherComponent,
    CurrentWeatherComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
