# Highlight overdue dates

Highlights overdue dates in red across the entire spreadsheet.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();

  let range;

  // One of the selection options below should remain uncommented

  //Option 1 - Default, takes the whole range
  range = worksheet.GetUsedRange(); // Uncommented: targets all the used cells in the document

  //Option 2 - Takes the selected range with mouse
  //range = worksheet.GetSelection(); // Uncommented: uses mouse-based selection

  //Option 3 - Takes the manually selected range
  //range = worksheet.GetRange("B5:D9"); // Uncommented: enables manual selection

  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  let today = new Date();
  let excelEpoch = new Date(1899, 11, 30); // ONLYOFFICE starts counting serial dates from Dec 30, 1899
  let todaySerial = Math.floor((today - excelEpoch) / 86400000); //Converting todays date into serial format

  for (let i = firstRowIndex; i < lastRowIndex; i++) {
    for (let j = firstColIndex; j < lastColIndex; j++) {
      if (
        worksheet.GetCells(i, j).GetNumberFormat() == "m/d/yyyy" ||
        worksheet.GetCells(i, j).GetNumberFormat() == "d/m/yyyy"
      ) {
        if (todaySerial > parseInt(worksheet.GetCells(i, j).GetValue())) {
          worksheet
            .GetCells(i, j)
            .SetFillColor(Api.CreateColorFromRGB(255, 0, 0))
        }
      }
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetNumberFormat.md), [CreateColorFromRGB](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)

## Result

![HighlightOverdueDates](/assets/images/plugins/highlight-overdue-dates.png#gh-light-mode-only)
![HighlightOverdueDates](/assets/images/plugins/highlight-overdue-dates.dark.png#gh-dark-mode-only)
