# 货币转换

将基础货币转换为多个目标货币。也可以获取指定日期的历史货币汇率。使用来自 [currencyapi](https://app.currencyapi.com/) 的货币转换 API。

> 使用此宏需要从 currencyapi 获取您自己的 API 密钥。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

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

    function reloadCellValues() {
      setTimeout(function () {
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
      }, 5000);
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

    // 获取并填充最新汇率数据
    let latestURL = buildLatestURL(apiKey, baseCurrency, currencies);
    fetchAndPopulateData(latestURL, currencies, false);

    /* 注释掉上面代码块，取消注释下面代码块以启用获取历史汇率功能 */

    // let date = "2025-01-01";
    // let historicalURL = buildHistoricalURL(apiKey, baseCurrency, date, currencies);
    // fetchAndPopulateData(historicalURL, currencies, true);

    reloadCellValues();
  })();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [AutoFit](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md)

## 结果

<!-- imgpath -->

![Currency conversion](/assets/images/plugins/currency-conversion.png#gh-light-mode-only)![Currency conversion](/assets/images/plugins/currency-conversion.dark.png#gh-dark-mode-only)
