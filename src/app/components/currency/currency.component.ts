import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  @Input()
  public currency!: Currency;
}
