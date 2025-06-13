# Search emails

Scans the spreadsheet for email addresses and compiles them into a separate column for easy access.

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
  //range = worksheet.GetRange("B5:D9"); // Uncommented: enables manual selection

  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  console.log(firstColIndex + " " + lastColIndex); // Testing if we got the right column indexes — first should be correct, last should be higher by 1
  console.log(firstRowIndex + " " + lastRowIndex); // Testing if we got the right row indexes — first should be correct, last should be higher by 1

  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let emails = [];

  //Putting all emails into the emails list
  for (let i = 0; i < lastRowIndex - firstRowIndex; i++) {
    for (let j = 0; j < lastColIndex - firstColIndex; j++) {
      if (data[i][j].match(emailRegex)) {
        emails.push(data[i][j]);
      }
    }
  }

  let usedRange = worksheet.GetUsedRange();
  let usedData = usedRange.GetValue();

  let firstUsedCol = usedRange.GetCells().Col;
  let lastUsedCol = usedData[0].length + firstUsedCol;

  for (i = 1; i <= emails.length; i++) {
    worksheet.GetCells(i, lastUsedCol).SetValue(emails[i - 1]);
  }
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![SearchEmails](/assets/images/plugins/search-emails.png#gh-light-mode-only)
![SearchEmails](/assets/images/plugins/search-emails.dark.png#gh-dark-mode-only)
