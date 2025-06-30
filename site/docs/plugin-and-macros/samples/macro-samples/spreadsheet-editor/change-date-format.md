# Change date format

Changes the default date format in the UsedRange from m/d/yyyy to d/m/yyyy.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range = worksheet.GetUsedRange();
  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  let dateRegex =
    /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/;

  let dateValue;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      if (
        worksheet
          .GetCells(firstColIndex + i, firstRowIndex + j)
          .GetNumberFormat() == "m/d/yyyy" // Check if the cell format is m/d/yyyy
      ) {
        worksheet
          .GetCells(firstColIndex + i, firstRowIndex + j)
          .SetNumberFormat("d/m/yyyy"); // Change format from m/d/yyyy to d/m/yyyy
      } else if (
        worksheet
          .GetCells(firstColIndex + i, firstRowIndex + j)
          .GetValue()
          .match(dateRegex) // Check if the value is a d/m/yyyy formatted string
      ) {
        dateValue = worksheet
          .GetCells(firstColIndex + i, firstRowIndex + j)
          .GetValue()
          .replace(/^(\d{1,2})\/(\d{1,2})\/(19\d{2}|20\d{2})$/, "$2/$1/$3"); //Swap the d/m/yyyy string into a m/d/yyyy
        worksheet.GetCells(firstColIndex + i, firstRowIndex + j).Clear(); //We clear the value and formatting
        worksheet
          .GetCells(firstColIndex + i, firstRowIndex + j)
          .SetValue(dateValue); //We apply the switched m/d/yyyy format, and because of that, this allows it to be recognized as a date
      }
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetNumberFormat.md), [SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md), [Clear](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Clear.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![ChangeDateFormat](/assets/images/plugins/change-date-format.png#gh-light-mode-only)
![ChangeDateFormat](/assets/images/plugins/change-date-format.dark.png#gh-dark-mode-only)
