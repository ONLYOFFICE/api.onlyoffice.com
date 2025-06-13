# Remove special characters

Removes special characters like @, #, and \$ from cell text.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range;

  // One of the selection options bellow should remain uncommented

  //Option 1 - Default, takes the whole range
  range = worksheet.GetUsedRange(); // Uncommented: targets all the used cells in the document

  //Option 2 - Takes the selected range with mouse
  //range = worksheet.GetSelection(); // Uncommented: uses mouse-based selection

  //Option 3 - Takes the manually selected range
  //range = worksheet.GetRange("D8:J14"); // Uncommented: enables manual selection

  let data = range.GetValue();

  if (!data) {
    return;
  }

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  console.log(firstColIndex + " " + lastColIndex); // Testing column indexes: first should match exactly, last should be one higher
  console.log(firstRowIndex + " " + lastRowIndex); // Testing row indexes: first should match exactly, last should be one higher

  let specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    `\\`,
    `|`,
    `[`,
    `]`,
    `{`,
    `}`,
    `;`,
    `:`,
    `/`,
    `?`,
    `.`,
    `>`,
    `<`,
  ];

  let newString;

  // Going through each data cell and checking if it contains any characters from the specialChars list
  for (let i = 0; i < lastRowIndex - firstRowIndex; i++) {
    for (let j = 0; j < lastColIndex - firstColIndex; j++) {
      newString = data[i][j];

      specialChars.forEach((spec) => {
        let regex = new RegExp(`\\${spec}`, "g");
        newString = newString.replace(regex, "");
      });

      worksheet
        .GetCells(firstRowIndex + i, firstColIndex + j)
        .SetValue(newString);
    }
  }
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![RemoveSpecialCharacters](/assets/images/plugins/remove-special-characters.png#gh-light-mode-only)
![RemoveSpecialCharacters](/assets/images/plugins/remove-special-characters.dark.png#gh-dark-mode-only)
