# Sheet merger

Merges data from all sheets into the active sheet by copying the used range of each sheet and appending it.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

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

Methods used: [GetSheets](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSheets.md), [GetActiveSheet](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetName](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetName.md), [GetUsedRange](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetRange](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<!-- imgpath -->

![SheetMerger](/assets/images/plugins/sheet-merger.png#gh-light-mode-only)![SheetMerger](/assets/images/plugins/sheet-merger.dark.png#gh-dark-mode-only)
