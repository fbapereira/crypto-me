import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { Currency } from "../models/currency";


@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    private coinAPIKey = "6034B036-BC74-42AC-8A1D-5B609F24137F";


    // public currencies$ = this.httpClient.get('http://rest-sandbox.coinapi.io/v1/assets', {headers: {'X-CoinAPI-Key': this.coinAPIKey}}).pipe(
    public currencies$ = of([
        {
            "asset_id": "BTC",
            "name": "Bitcoin",
            "type_is_crypto": 1,
            "data_start": "2010-07-17",
            "data_end": "2019-11-03",
            "data_quote_start": "2014-02-24T17:43:05.0000000Z",
            "data_quote_end": "2019-11-03T17:55:07.6724523Z",
            "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
            "data_orderbook_end": "2019-11-03T17:55:17.8592413Z",
            "data_trade_start": "2010-07-17T23:09:17.0000000Z",
            "data_trade_end": "2019-11-03T17:55:11.8220000Z",
            "data_symbols_count": 22711,
            "volume_1hrs_usd": 102894431436.49,
            "volume_1day_usd": 2086392323256.16,
            "volume_1mth_usd": 57929168359984.54,
            "price_usd": 9166.207274778093436220194944
        },
        {
            "asset_id": "USD",
            "name": "US Dollar",
            "type_is_crypto": 1,
            "data_start": "2010-07-17",
            "data_end": "2019-11-03",
            "data_quote_start": "2014-02-24T17:43:05.0000000Z",
            "data_quote_end": "2019-11-03T17:54:49.3807706Z",
            "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
            "data_orderbook_end": "2019-11-03T17:55:13.1863931Z",
            "data_trade_start": "2010-07-17T23:09:17.0000000Z",
            "data_trade_end": "2019-11-03T17:55:07.7870000Z",
            "data_symbols_count": 10728,
            "volume_1hrs_usd": 9466454016.52,
            "volume_1day_usd": 221580758173.49,
            "volume_1mth_usd": 11816685174661.70,
            "price_usd": 1.0
        },
        {
            "asset_id": "USDs",
            "name": "US Dollars",
            "type_is_crypto": 1,
            "data_start": "2010-07-17",
            "data_end": "2019-11-03",
            "data_quote_start": "2014-02-24T17:43:05.0000000Z",
            "data_quote_end": "2019-11-03T17:54:49.3807706Z",
            "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
            "data_orderbook_end": "2019-11-03T17:55:13.1863931Z",
            "data_trade_start": "2010-07-17T23:09:17.0000000Z",
            "data_trade_end": "2019-11-03T17:55:07.7870000Z",
            "data_symbols_count": 10728,
            "volume_1hrs_usd": 9466454016.52,
            "volume_1day_usd": 221580758173.49,
            "volume_1mth_usd": 11816685174661.70,
            "price_usd": 1.0
        }
    ]).pipe(
        map((currencies: any) => {
            currencies = currencies.filter((currency: any) => currency.type_is_crypto);
            currencies.map((value: any) => value.id = value.asset_id)
            return currencies as Currency[];
        }),
    );

    constructor(private httpClient: HttpClient) { }
}