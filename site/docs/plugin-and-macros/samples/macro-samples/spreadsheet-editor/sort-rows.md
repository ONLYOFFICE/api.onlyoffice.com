# Sort rows

Sorts all rows in the spreadsheet by the year mentioned in a row, in ascending or descending order.

```ts
(function () {
  //The default date format is m/d/yyyy. The macro is capable of detecting dates in the d/m/yyyy format, but only if dates are entered in that format before running the macro.

  let hasHeaders;

  //Leave one option uncommented

  hasHeaders = true; //Leave uncommented if the table has headers
  //hasHeaders = false; //Leave uncommented if the table does not have headers

  let worksheet = Api.GetActiveSheet();

  let range = worksheet.GetUsedRange();

  let data = range.GetValue();

  let headers;

  // If headers are present, we detach them from the data before sorting
  if (hasHeaders) {
    headers = data[0];
    data.shift();
  }

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  console.log(firstColIndex + " " + lastColIndex); // Testing if we got the correct column indexes; the last should be one higher
  console.log(firstRowIndex + " " + lastRowIndex); // Testing if we got the correct row indexes; the last should be one higher

  let dateIndex = -1;

  //Loops for checking where in the spreadsheet is the date column, after we find it, we set the dateIndex to point to that column index
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      let format = worksheet
        .GetCells(firstColIndex + i, firstRowIndex + j)
        .GetNumberFormat();
      if (format == "m/d/yyyy" || format == "d/m/yyyy") {
        dateIndex = j;
        break;
      }
    }
    if (format == "m/d/yyyy" || format == "d/m/yyyy") {
      break;
    }
  }

  //Sorting the data
  data.sort(function (a, b) {
    return a[dateIndex] - b[dateIndex];
  });

  //After the data gets sorted, we attach headers on top of it again
  if (hasHeaders) {
    data.unshift(headers);
  }

  //We set the new, sorted data into the spreadsheet
  range.SetValue(data);
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetNumberFormat](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetNumberFormat.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![SortRows](/assets/images/plugins/sort-rows.png#gh-light-mode-only)
![SortRows](/assets/images/plugins/sort-rows.dark.png#gh-dark-mode-only)
