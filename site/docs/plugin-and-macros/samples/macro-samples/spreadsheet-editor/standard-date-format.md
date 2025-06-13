# Standard date format

Standardizes all date formats across the selected range and entire spreadsheet.

```ts
// Date Formatter: Standardize date formats across a selected range and the entire spreadsheet.

(function () {
  let worksheet = Api.GetActiveSheet();

  //Keep the desired date format uncommented
  let dateType = "m/d/yyyy"; // Comment to disable / Uncomment to enable
  //let dateType = "d/m/yyyy"; // Uncomment to enable / Comment to disable

  let range;

  // One of the selection options bellow should remain uncommented

  //Option 1 - Default: targets the whole range
  range = worksheet.GetUsedRange(); // Uncommented targets all the used cells on the document

  //Option 2 - Takes the selected range with mouse
  //range = worksheet.GetSelection(); // Uncommented uses mouse based selection

  //Option 3 - Manually define the range
  //range = worksheet.GetRange("B5:D9"); // Uncommented enables manual selection

  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  console.log(firstColIndex + " " + lastColIndex); // Testing column indexes: first should be accurate, last should be +1
  console.log(firstRowIndex + " " + lastRowIndex); // Testing row indexes: first should be accurate, last should be +1

  for (let i = firstRowIndex; i < lastRowIndex; i++) {
    for (let j = firstColIndex; j < lastColIndex; j++) {
      let currentCell = worksheet.GetCells(i, j).GetValue();
      if (!isNaN(parseFloat(currentCell))) {
        worksheet.GetCells(i, j).SetNumberFormat(dateType);
      }
    }
  }
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetNumberFormat](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md)

## Result

![StandardDateFormat](/assets/images/plugins/standard-date-format.png#gh-light-mode-only)
![StandardDateFormat](/assets/images/plugins/standard-date-format.dark.png#gh-dark-mode-only)
