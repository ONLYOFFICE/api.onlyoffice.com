# Clear all formatting

Removes the default formatting for the selected range.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range = worksheet.GetUsedRange();
  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      if (
        !worksheet.GetCells(firstColIndex + i, firstRowIndex + j).GetValue()
      ) {
        worksheet.GetCells(firstColIndex + i, firstRowIndex + j).Clear();
      }
    }
  }

  //Applying new range with cleared formats, just as before, for testing purposes
  range = worksheet.GetUsedRange();
  data = range.GetValue();

  firstRowIndex = range.GetCells().Row;
  firstColIndex = range.GetCells().Col;
  lastRowIndex = data.length + firstRowIndex;
  lastColIndex = data[0].length + firstColIndex;
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [Clear](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Clear.md)

## Result

![ClearAllFormatting](/assets/images/plugins/clear-all-formatting.png#gh-light-mode-only)
![ClearAllFormatting](/assets/images/plugins/clear-all-formatting.dark.png#gh-dark-mode-only)
