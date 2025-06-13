# Highlight overdue dates

Highlights overdue dates in red across the entire spreadsheet.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();

  let range;

  // One of the selection options bellow should remain uncommented

  //Option 1 - Default, takes the whole range
  range = worksheet.GetUsedRange(); // Uncommented: targets all the used cells in the document

  //Option 2 - Takes the selected range with mouse
  //range = worksheet.GetSelection(); // Uncommented: uses-mouse based selection

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

  console.log(firstColIndex + " " + lastColIndex); // Testing if we got the right column indexes — first should be correct, last should be higher by 1
  console.log(firstRowIndex + " " + lastRowIndex); // Testing if we got the right row indexes — first should be correct, last should be higher by 1

  for (let i = firstRowIndex; i < lastRowIndex; i++) {
    for (let j = firstColIndex; j < lastColIndex; j++) {
      if (
        worksheet.GetCells(i, j).GetNumberFormat() == "m/d/yyyy" ||
        worksheet.GetCells(i, j).GetNumberFormat() == "d/m/yyyy"
      ) {
        if (todaySerial > parseInt(worksheet.GetCells(i, j).GetValue())) {
          console.log(
            worksheet
              .GetCells(i, j)
              .SetFillColor(Api.CreateColorFromRGB(255, 0, 0))
          );
        }
      }
    }
  }
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetNumberFormat](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetNumberFormat.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)

## Result

![HighlightOverdueDates](/assets/images/plugins/highlight-overdue-dates.png#gh-light-mode-only)
![HighlightOverdueDates](/assets/images/plugins/highlight-overdue-dates.dark.png#gh-dark-mode-only)
