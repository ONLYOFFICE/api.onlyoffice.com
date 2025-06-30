# Autoname columns

Assigns titles to all columns in a table based on the values in the first row for easy reference in formulas and calculations.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range;

  // One of the selection options below should remain uncommented
  range = worksheet.GetSelection(); // Uncommented: uses mouse based selection
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

  let table = [];

  for (let i = 0; i <= lastRowIndex - firstRowIndex; i++) {
    for (let j = 0; j < lastColIndex - firstColIndex; j++) {
      if (i == 0) {
        let nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        let dateRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
        if ((data[i][j] + "").match(dateRegex)) {
          table.push("Date");
        } else if (!isNaN(data[i][j]) && !isNaN(parseFloat(data[i][j]))) {
          if (data[i][j].includes(".")) {
            table.push("Decimal");
          } else {
            table.push("Whole Number");
          }
        } else if (data[i][j].match(nameRegex)) {
          table.push("Name");
        } else {
          table.push("String");
        }
      } else {
        table.push(data[i - 1][j]);
      }
    }
    table.push("/");
  }

  let firstIndex = firstColIndex;
  let secondIndex = firstRowIndex;

  for (let i = 0; i < table.length; i++) {
    if (table[i] != "/") {
      worksheet.GetCells(secondIndex, firstIndex).SetValue(table[i]);
      firstIndex++;
    } else {
      firstIndex = firstColIndex;
      secondIndex++;
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetSelection.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![AutonameColumns](/assets/images/plugins/autoname-columns.png#gh-light-mode-only)
![AutonameColumns](/assets/images/plugins/autoname-columns.dark.png#gh-dark-mode-only)
