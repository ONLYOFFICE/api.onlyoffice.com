# CurrenciesDto
One currency the portal's subscription prices can be quoted in, with the region it belongs to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **isoCountryCode** | **String** | The two-letter ISO code of the country the currency is that of, which is the region the price list was picked for rather than the country of the caller. | [optional] [example: `US`] [nullable] |
| **isoCurrencySymbol** | **String** | The three-letter ISO 4217 code of the currency. On the first item of the answer it is the currency the amounts from `GET api/2.0/portal/payment/prices` are expressed in. | [optional] [example: `USD`] [nullable] |
| **currencyNativeName** | **String** | The currency name in the language of its own region - not in the portal language, and not a symbol. | [optional] [example: `US Dollar`] [nullable] |
