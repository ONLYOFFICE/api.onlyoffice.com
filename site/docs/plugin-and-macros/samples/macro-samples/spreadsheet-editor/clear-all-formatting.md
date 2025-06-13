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

  //Testing used range BEFORE clearing format
  console.log(
    "Column indexes before clearing format: " +
      firstColIndex +
      " " +
      lastColIndex
  ); // Testing if we got the right column indexes; the first should be correct, the last should be higher by 1
  console.log(
    "Row indexes before clearing format: " + firstRowIndex + " " + lastRowIndex
  ); // Testing if we got the right row indexes; the first should be correct, the last should be higher by 1

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

  //Testing used range AFTER clearing format
  console.log(
    "Column indexes after clearing format: " +
      firstColIndex +
      " " +
      lastColIndex
  ); // Testing if we got the right column indexes; the first should be correct, the last should be higher by 1
  console.log(
    "Row indexes after clearing format: " + firstRowIndex + " " + lastRowIndex
  ); // Testing if we got the right row indexes; the first should be correct, the last should be higher by 1
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [Clear](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Clear.md)

## Result

![ClearAllFormatting](/assets/images/plugins/clear-all-formatting.png#gh-light-mode-only)
![ClearAllFormatting](/assets/images/plugins/clear-all-formatting.dark.png#gh-dark-mode-only)
