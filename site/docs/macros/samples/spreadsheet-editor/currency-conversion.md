---
hide_table_of_contents: true
description: Convert currency values between different currencies.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Currency conversion

Converts a base currency into multiple desired target currencies. It can also fetch historical currency values for a specific date. Uses the Currency Conversion API from [currencyapi](https://app.currencyapi.com/).

:::note
To use this macro, you need to obtain your own API key from currencyapi.
:::

```ts
(function () {
    function buildHistoricalURL(apiKey, baseCurrency, date, currencies) {
      let currencyParam = currencies.join("%2C");
      return `https://api.currencyapi.com/v3/historical?apikey=${apiKey}&currencies=${currencyParam}&base_currency=${baseCurrency}&date=${date}`;
    }

    function buildLatestURL(apiKey, baseCurrency, currencies) {
      let currencyParam = currencies.join("%2C");
      return `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${currencyParam}&base_currency=${baseCurrency}`;
    }

    function fetchAndPopulateData(url, currencies, isHistorical) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onload = function () {
        if (this.status === 200) {
          let apiData = JSON.parse(this.response);
          let data = apiData.data;

          let sheet = Api.GetActiveSheet();
          sheet.GetRange("A1").SetValue("Currency Code");
          sheet.GetRange("A1").AutoFit(false, true);
          sheet
            .GetRange("B1")
            .SetValue(isHistorical ? "Historical Rate" : "Exchange Rate");

          sheet.GetRange("B1").AutoFit(false, true);

          currencies.forEach((currency, index) => {
            if (data[currency]) {
              let { code, value } = data[currency];
              sheet.GetRange(`A${index + 2}`).SetValue(code);
              sheet.GetRange(`B${index + 2}`).SetValue(value);
            } else {
              console.warn(`Currency ${currency} not found in the response.`);
            }
          });

          Api.RecalculateAllFormulas();
        } else {
          console.error(`Error fetching data: ${this.statusText}`);
        }
      };

      xhr.onerror = function () {
        console.error(
          "There was some error in your request. Check and try again."
        );
      };

      xhr.send();
    }

    let baseCurrency = "GBP";
    let currencies = ["CAD", "EUR", "USD", "AUD", "SGD"];
    let apiKey = "YOUR_API_KEY";

    // Fetch and populate the latest exchange rates
    let latestURL = buildLatestURL(apiKey, baseCurrency, currencies);
    fetchAndPopulateData(latestURL, currencies, false);

    /* Comment out the upper block and uncomment the following block to enable fetching historical exchange rates */

    // let date = "2025-01-01";
    // let historicalURL = buildHistoricalURL(apiKey, baseCurrency, date, currencies);
    // fetchAndPopulateData(historicalURL, currencies, true);
  })();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [AutoFit](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md), [RecalculateAllFormulas](../../../office-api/usage-api/spreadsheet-api/Api/Methods/RecalculateAllFormulas.md)

## Result

<Video src="/assets/video/macros/spreadsheet-editor/currency-conversion" dark />
