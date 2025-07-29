# 工作表合并

通过复制每个工作表的已用区域并追加，将所有工作表的数据合并到当前活动工作表。

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

使用方法: [GetSheets](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheets.md), [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetName](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetName.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 结果

<!-- imgpath -->

![SheetMerger](/assets/images/plugins/sheet-merger.png#gh-light-mode-only)![SheetMerger](/assets/images/plugins/sheet-merger.dark.png#gh-dark-mode-only)
