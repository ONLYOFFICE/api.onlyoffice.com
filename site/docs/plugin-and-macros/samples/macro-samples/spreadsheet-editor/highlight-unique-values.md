# Highlight unique values

Extracts all unique entries from the selected range or the entire sheet, highlights them in place, and consolidates that list into a new column for easy reference.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range;

  // One of the selection options below should remain uncommented
  range = worksheet.GetSelection(); // Uncommented: for mouse-based selection
  //range = worksheet.GetUsedRange();  // Uncommented: targets all the used cells in the document
  //range = worksheet.GetRange("B5:D9"); // Uncommented: enables manual selection

  let data = range.GetValue();

  if (!data) {
    return;
  }

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  data = data.flat();

  let uniqueData = [];
  let counter;

  for (let i = 0; i < data.length; i++) {
    counter = 0;
    for (let j = 0; j < data.length; j++) {
      if (i != j && data[i] == data[j]) {
        counter++;
      }
    }
    if (counter == 0 && data[i] != "") {
      uniqueData.push(data[i]);
    }
    counter = 0;
  }

  for (let i = firstRowIndex; i < lastRowIndex; i++) {
    for (let j = firstColIndex; j < lastColIndex; j++) {
      if (uniqueData.includes(worksheet.GetCells(i, j).GetValue())) {
        worksheet
          .GetCells(i, j)
          .SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
      }
    }
  }

  let usedRange = worksheet.GetUsedRange();
  let usedData = usedRange.GetValue();

  let firstUsedCol = usedRange.GetCells().Col;
  let lastUsedCol = usedData[0].length + firstUsedCol;

  for (let i = 1; i <= uniqueData.length; i++) {
    worksheet.GetCells(i, lastUsedCol).SetValue(uniqueData[i - 1]);
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetSelection.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [CreateColorFromRGB](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![HighlightUniqueValues](/assets/images/plugins/highlight-unique-values.png#gh-light-mode-only)
![HighlightUniqueValues](/assets/images/plugins/highlight-unique-values.dark.png#gh-dark-mode-only)
