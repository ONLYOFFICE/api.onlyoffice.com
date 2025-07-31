# Sort rows

Sorts all rows in the spreadsheet by the year mentioned in a row, in ascending order. The supported date formats are *mm/dd/yyyy* and *dd/mm/yyyy*.

In the macro, you can set the sort order to ascending or descending.

```ts
(function () {
  let hasHeaders = true; // Set true if the table has headers

  let worksheet = Api.GetActiveSheet();
  let range = worksheet.GetUsedRange();
  let data = range.GetValue();
  let ascendingOrder = true // Set false for sorting id descending order

  let headers;

  if (hasHeaders) {
    headers = data[0];
    data.shift();
  }

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;

  let dateIndex = -1;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      let cell = worksheet.GetCells(firstRowIndex + i, firstColIndex + j);
      let format = cell.GetNumberFormat();
      if (format == "mm/dd/yyyy" || format == "dd/mm/yyyy") {
        dateIndex = j;
        break;
      }
    }
    if (dateIndex !== -1) break;
  }

  //Sorting the data
  data.sort(function (a, b) {
    let dateA = new Date(a[dateIndex]);
    let dateB = new Date(b[dateIndex]);
    if (ascendingOrder) {
      return dateA - dateB;
    } else {
      return dateB - dateA
    }
    
  });

  if (hasHeaders) {
    data.unshift(headers);
  }

  range.SetValue(data);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetNumberFormat.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![SortRows](/assets/images/plugins/sort-rows.png#gh-light-mode-only)
![SortRows](/assets/images/plugins/sort-rows.dark.png#gh-dark-mode-only)
