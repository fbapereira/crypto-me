import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Currency } from './models/currency';
import { CurrencyService } from './services/currency.service';
import { AppState } from './store/app.state';
import { addCurrencies } from './store/currency/currency.actions';
import { selectCurrencies } from './store/currency/currency.selectors';
import { addFavorite, removeFavorite } from './store/favorite/favorite.actions';
import { selectFavorites } from './store/favorite/favorite.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currencies$ = this.store.pipe(select(selectCurrencies))
  public favorites$ = this.store.pipe(select(selectFavorites))
  public selectedCurrency!: Currency;

  constructor(
    private store: Store<AppState>,
    private currencyService: CurrencyService
  ){}

  ngOnInit(){
    this.currencyService.currencies$
      .subscribe((currencies) => this.store.dispatch(addCurrencies({currencies})));
  }

  favorite() {
    this.store.dispatch(addFavorite({ currency: this.selectedCurrency } ))
  }

  remove(currency: Currency) {
    this.store.dispatch(removeFavorite({ currency } ))
  }
}
