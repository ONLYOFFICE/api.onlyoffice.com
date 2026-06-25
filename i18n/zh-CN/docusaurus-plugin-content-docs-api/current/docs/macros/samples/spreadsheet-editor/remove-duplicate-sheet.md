---
hide_table_of_contents: true
description: 从工作簿中删除重复的工作表。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 删除重复工作表

识别并删除电子表格中的重复工作表。

```ts
(function()
{
    let sheets = Api.GetSheets();
    let numSheets = sheets.length;

    // 辅助函数：比较两个工作表内容是否完全相同
    function areSheetsEqual(sheet1, sheet2) {
        let rangeVal1 = sheet1.GetUsedRange().GetValue();
        let rangeVal2 = sheet2.GetUsedRange().GetValue();

        // 如果已用区域尺寸不同，直接返回 false
        if (rangeVal1.length !== rangeVal2.length || rangeVal1[0].length !== rangeVal2[0].length) {
            return false;
        } else {
            // 比较每个单元格的值
            for (let row = 0; row < rangeVal1.length; row++) {
                for (let col = 0; col < rangeVal1[row].length; col++) {
                    if (sheet1.GetRangeByNumber(row, col).GetValue() !== sheet2.GetRangeByNumber(row, col).GetValue()) {
                        return false;
                    }
                }
            }
        }

        // 两个工作表完全相同
        return true; 
    }

    // 两两比较工作表，删除重复项
    for (let i = 0; i < numSheets; i++) {
        let sheet1 = sheets[i];
        for (let j = i + 1; j < numSheets; j++) {
            let sheet2 = sheets[j];

            // 如果是重复工作表，则删除
            if (areSheetsEqual(sheet1, sheet2)) {
                sheet2.Delete();
            }
        }
    }
})();
```

使用方法： [GetSheets](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheets.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetRangeByNumber](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [Delete](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Delete.md)

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/remove-duplicate-sheet" dark />
