---
hide_table_of_contents: true
---

# Calculate World Bank indicator

Creates an [asynchronous custom function](/docs/plugin-and-macros/macros/adding-custom-functions.md#asynchronous-functions) to calculate a World Bank indicator value for a specific year.

The following indicators can be calculated:

| Indicator code | Indicator value                   |
|----------------|-----------------------------------|
| NY.GDP.MKTP.CD | GDP (current US $)                |
| SP.POP.TOTL    | Population total                  |
| EN.ATM.CO2E.KT | CO₂ emissions (kt)                |
| EG.FEC.RNEW.ZS | Renewable energy %                |
| IT.NET.USER.ZS | Internet users % - IT.NET.USER.ZS |

For more information, visit the [World Bank documentation](https://data.worldbank.org/indicator).

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
//custom function:

(function () {
  /**
   * Calculates the World Bank indicator value for a specific year.
   * @customfunction
   * @param {string} country ISO-3 code, e.g. "TUR".
   * @param {string} indicator Indicator code, e.g. "SP.POP.TOTL".
   * @param {number} year Four-digit year, e.g. 2024.
   * @returns {any} Numeric value or #N/A.
   *
   * @example =WB("TUR", "SP.POP.TOTL", 2024)
   */
  async function WB(country, indicator, year) {
    // Build URL (World Bank allows CORS)
    const url =
      `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}` +
      `?format=json&per_page=20000`;

    try {
      const r = await fetch(url);
      const [meta, data] = await r.json();

      // Find a row for the requested year
      const row = data.find((v) => v.date === year.toString());
      if (!row || row.value == null) return "#N/A";

      return row.value; // resolves the Promise
    } catch (e) {
      return "#ERROR";
    }
  }

  // Register the function so it becomes a sheet formula
  Api.AddCustomFunction(WB);
})();

(function () {
    // Get the active worksheet
    let worksheet = Api.GetActiveSheet();

    // Insert labels into cells A1 and B1
    worksheet.GetRange("A1").SetValue("Country");
    worksheet.GetRange("B1").SetValue("GDP 2024");

    // Add countries in the ISO-3 format
    let countries = ["USA", "CHN", "JPN", "DEU", "IND", "GBR", "FRA", "ITA", "CAN"];
    for (let i = 0; i < countries.length; i++) {
      worksheet.GetRange("A" + (i + 2)).SetValue(countries[i]);
    }

    worksheet.FormatAsTable("A1:B10");

    // Insert the formula for each country
    // This calls the custom function 'WB' that was registered above
    for (let i = 0; i < countries.length; i++) {
      let country = worksheet.GetRange("A" + (i + 2)).GetValue();
      worksheet.GetRange("B" + (i + 2)).SetValue(`=WB("${country}", "NY.GDP.MKTP.CD", 2024)`);
    }

    // Build a chart
    let chart = worksheet.AddChart("'Sheet1'!$A$1:$B$10", true, "bar", 2, 100 * 36000, 60 * 36000, 0, 0, 10, 0);
    chart.SetTitle("GDP  2024", 13);
})();
```

Methods used: [AddCustomFunction](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/AddCustomFunction.md), [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [FormatAsTable](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/FormatAsTable.md), [AddChart](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart.md), [SetTitle](/docs/office-api/usage-api/spreadsheet-api/ApiChart/Methods/SetTitle.md)

## Result

<!-- imgpath -->

![World Bank indicator](/assets/images/plugins/world-bank-indicator.png#gh-light-mode-only)![World Bank indicator](/assets/images/plugins/world-bank-indicator.dark.png#gh-dark-mode-only)
