# Check data mismatch

Highlights cells with data type mismatches based on column majority vote, starting from B2 by default, with configurable header offsets.

```ts
(function () {
    let sheet = Api.GetActiveSheet();
  
    let usedRange = sheet.GetUsedRange();
    let usedAddress = usedRange.GetAddress();
    let parts = usedAddress.split(":");
    let endCell = parts[1];
  
    let useHeaderOffset = true;
  
    let targetRangeAddress, startRow, startCol;
    if (useHeaderOffset) {
      startRow = 2;
      startCol = 2;
      targetRangeAddress = "B2:" + endCell;
    } else {
      startRow = 1;
      startCol = 1;
      targetRangeAddress = usedAddress;
    }
  
    let range = sheet.GetRange(targetRangeAddress);
    let data = range.GetValue();
    if (!data || data.length === 0) {
      return;
    }
  
    let numRows = data.length;
    let numCols = data[0].length;
  
    let expectedTypes = [];
    for (let j = 0; j < numCols; j++) {
      let countNumeric = 0;
      let countText = 0;
      for (let i = 0; i < numRows; i++) {
        let cellValue = data[i][j];
        if (cellValue === null || cellValue === "") continue;
        if (!isNaN(parseFloat(cellValue))) {
          countNumeric++;
        } else {
          countText++;
        }
      }
      expectedTypes.push(countNumeric >= countText ? "number" : "text");
    }
  
    function getColumnLetter(colNum) {
      let letter = "";
      while (colNum > 0) {
        let mod = (colNum - 1) % 26;
        letter = String.fromCharCode(65 + mod) + letter;
        colNum = Math.floor((colNum - mod) / 26);
      }
      return letter;
    }
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        let cellValue = data[i][j];
        let expectedType = expectedTypes[j];
        let mismatch = false;
  
        if (expectedType === "number") {
          if (cellValue !== null && cellValue !== "" && isNaN(parseFloat(cellValue))) {
            mismatch = true;
          }
        } else {
          if (cellValue !== null && cellValue !== "" && !isNaN(parseFloat(cellValue))) {
            mismatch = true;
          }
        }
  
        if (mismatch) {
          let absRow = startRow + i;
          let absCol = startCol + j;
          let cellAddress = getColumnLetter(absCol) + absRow;
          let cell = sheet.GetRange(cellAddress);
          cell.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
        }
      }
    }
  })();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetAddress](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md)

## Result

![DataMismatchChecker](/assets/images/plugins/data-mismatch-checker.png#gh-light-mode-only)
![DataMismatchChecker](/assets/images/plugins/data-mismatch-checker.dark.png#gh-dark-mode-only)
