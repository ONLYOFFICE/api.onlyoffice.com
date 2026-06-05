---
hide_table_of_contents: true
description: 将 CSV 或 TXT 文件中的数据导入电子表格。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 导入 CSV/TXT 数据

从远程 CSV/TXT 文件导入数据到电子表格中。

:::note
此宏仅适用于 ONLYOFFICE 桌面版编辑器。
:::

```ts
(function() 
{
    //Load the file from the URL
    function LoadFile() {
        $.ajax({
            url: 'your url',
            dataType: 'text',
        }).done(successFunction);
    }
    // Process the data
    function successFunction(data) {
        let arrAllRows = data.split(/\r?\n|\r/);
        let worksheet = Api.GetActiveSheet();

        //基准点
        let i = 1;
        let j = 1;

        for (let singleRow = 0; singleRow < arrAllRows.length; singleRow++) {
            let rowCells = arrAllRows[singleRow].split(',');
            for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
               worksheet.GetCells(i,j).SetValue(rowCells[rowCell]);
                j = j + 1;
            }
            i = i + 1;
            j = 1;
        }
        let usedRange = worksheet.GetUsedRange();
        usedRange.AutoFit(true, true);
    }
    LoadFile();
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [AutoFit](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md)

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/import-csv-or-txt-data" dark />
