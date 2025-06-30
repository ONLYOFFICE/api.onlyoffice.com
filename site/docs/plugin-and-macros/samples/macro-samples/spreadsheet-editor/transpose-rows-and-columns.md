# Transpose rows and columns

Converts data layout by transposing rows into columns.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range;

  // One of the selection options below should remain uncommented
  range = worksheet.GetSelection(); // Uncommented: for mouse-based selection
  //range = worksheet.GetUsedRange();  // Uncommented: targets all the used cells in the document
  //range = worksheet.GetRange("B5:D9"); // Uncommented: enables manual selection

  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  let table = [];

  for (let i = 0; i < lastRowIndex - firstRowIndex; i++) {
    for (let j = 0; j < lastColIndex - firstColIndex; j++) {
      table.push(data[i][j]);
    }
    table.push("/");
  }

  range.Clear();

  let firstIndex = firstColIndex;
  let secondIndex = firstRowIndex;

  for (let i = 0; i < table.length; i++) {
    if (table[i] != "/") {
      worksheet.GetCells(secondIndex, firstIndex).SetValue(table[i]);
      secondIndex++;
    } else {
      secondIndex = firstRowIndex;
      firstIndex++;
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetSelection.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [Clear](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Clear.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![TransposeRowsAndColumns](/assets/images/plugins/transpose-rows-and-columns.png#gh-light-mode-only)
![TransposeRowsAndColumns](/assets/images/plugins/transpose-rows-and-columns.dark.png#gh-dark-mode-only)
