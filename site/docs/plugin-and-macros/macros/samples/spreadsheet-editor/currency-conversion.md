# Currency conversion

Converts a base currency into multiple desired target currencies. It can also fetch historical currency values for a specific date. Uses the Currency Conversion API from [currencyapi](https://app.currencyapi.com/).

> To use this macro, you need to obtain your own API key from currencyapi.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    function buildHistoricalURL(apiKey, baseCurrency, date, currencies) {
      const currencyParam = currencies.join("%2C");
      return `https://api.currencyapi.com/v3/historical?apikey=${apiKey}&currencies=${currencyParam}&base_currency=${baseCurrency}&date=${date}`;
    }
  
    function buildLatestURL(apiKey, baseCurrency, currencies) {
      const currencyParam = currencies.join("%2C");
      return `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${currencyParam}&base_currency=${baseCurrency}`;
    }
  
    function reloadCellValues() {
      setTimeout(function () {
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
      }, 5000);
    }
  
    function fetchAndPopulateData(url, currencies, isHistorical) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onload = function () {
        if (this.status === 200) {
          const apiData = JSON.parse(this.response);
          const data = apiData.data;
  
          const sheet = Api.GetActiveSheet();
          sheet.GetRange("A1").SetValue("Currency Code");
          sheet.GetRange("A1").AutoFit(false, true);
          sheet
            .GetRange("B1")
            .SetValue(isHistorical ? "Historical Rate" : "Exchange Rate");
  
          sheet.GetRange("B1").AutoFit(false, true);
  
          currencies.forEach((currency, index) => {
            if (data[currency]) {
              const { code, value } = data[currency];
              sheet.GetRange(`A${index + 2}`).SetValue(code);
              sheet.GetRange(`B${index + 2}`).SetValue(value);
            } else {
              console.warn(`Currency ${currency} not found in the response.`);
            }
          });
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
  
    const baseCurrency = "GBP";
    const currencies = ["CAD", "EUR", "USD", "AUD", "SGD"];
    const apiKey = "YOUR_API_KEY";
  
    // Fetch and populate the latest exchange rates
    const latestURL = buildLatestURL(apiKey, baseCurrency, currencies);
    fetchAndPopulateData(latestURL, currencies, false);
  
    /* Comment out the upper block and uncomment the following block to enable fetching historical exchange rates */
  
    // const date = "2025-01-01";
    // const historicalURL = buildHistoricalURL(apiKey, baseCurrency, date, currencies);
    // fetchAndPopulateData(historicalURL, currencies, true);
  
    reloadCellValues();
  })();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [AutoFit](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md)

## Result

<!-- imgpath -->

![Currency conversion](/assets/images/plugins/currency-conversion.png#gh-light-mode-only)![Currency conversion](/assets/images/plugins/currency-conversion.dark.png#gh-dark-mode-only)
