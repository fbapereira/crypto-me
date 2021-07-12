import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { currencyReducer } from './store/currency/currency.reducer';
import { favoritesReducer } from './store/favorite/favorite.reducer';
import { CurrencyComponent } from './components/currency/currency.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FavoriteEffects } from './store/favorite/favorite.effect';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ currencies: currencyReducer, favorites: favoritesReducer  }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    HttpClientModule,
    EffectsModule.forRoot([FavoriteEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
