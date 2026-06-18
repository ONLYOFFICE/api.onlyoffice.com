---
hide_table_of_contents: true
description: Merge data from multiple sheets into one.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Sheet merger

Merges data from all sheets into the active sheet by copying the used range of each sheet and appending it.

```ts
(function () {
    let sheets = Api.GetSheets();
    let mergedSheet = Api.GetActiveSheet();
    let currentRow = 0;

    for (let i = 0; i < sheets.length; i++) {
        if (sheets[i].GetName() != mergedSheet.GetName()) {
            let sheet = sheets[i];
            let data = sheet.GetUsedRange().GetValue();
            let range = sheet.GetUsedRange().Address;
            range = range.replace(/\$/g, "");

            let parts = range.split(":");
            let column1 = parts[0].match(/[A-Z]+/)[0];
            let column2 = parts[1].match(/[A-Z]+/)[0];

            let row1 = parseInt(parts[0].match(/\d+/)[0]) + currentRow;
            let row2 = parseInt(parts[1].match(/\d+/)[0]) + currentRow;

            currentRow = currentRow + parseInt(parts[1].match(/\d+/)[0]) + 1;

            let newRange = column1 + row1 + ":" + column2 + row2;
            console.log(newRange);

            mergedSheet.GetRange(newRange).SetValue(data);
        }
    }
})();
```

Methods used: [GetSheets](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheets.md), [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetName](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetName.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<Video src="/assets/video/macros/spreadsheet-editor/sheet-merger" dark />
