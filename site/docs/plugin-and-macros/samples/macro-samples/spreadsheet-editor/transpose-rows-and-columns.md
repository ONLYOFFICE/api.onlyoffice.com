# Transpose rows and columns

Converts data layout by transposing rows into columns.

```ts
// Data Transposer: Convert data between rows and columns.

(function () {
  let worksheet = Api.GetActiveSheet();
  let range;

  // One of the selection options bellow should remain uncommented
  range = worksheet.GetSelection(); // Uncommented: for mouse based selection
  //range = worksheet.GetUsedRange();  // Uncommented: targets all the used cells in the document
  //range = worksheet.GetRange("B5:D9"); // Uncommented: enables manual selection

  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  console.log(firstColIndex + " " + lastColIndex); // Testing column indexes: first should match exactly, last should be one higher
  console.log(firstRowIndex + " " + lastRowIndex); // Testing row indexes: first should match exactly, last should be one higher

  let table = [];

  for (let i = 0; i < lastRowIndex - firstRowIndex; i++) {
    for (let j = 0; j < lastColIndex - firstColIndex; j++) {
      table.push(data[i][j]);
    }
    table.push("/");
  }

  console.log(table);

  range.Clear();

  let firstIndex = firstColIndex;
  let secondIndex = firstRowIndex;

  for (i = 0; i < table.length; i++) {
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

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetSelection.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [Clear](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Clear.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![TransposeRowsAndColumns](/assets/images/plugins/transpose-rows-and-columns.png#gh-light-mode-only)
![TransposeRowsAndColumns](/assets/images/plugins/transpose-rows-and-columns.dark.png#gh-dark-mode-only)
