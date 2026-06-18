---
hide_table_of_contents: true
description: Change the value of specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Change cell value

Changes the selected cell value.

:::note
This macro was converted from VBA code using the [AI plugin](../../guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin).
:::

```ts
(function(){
    // Get the active sheet
    var activeSheet = Api.GetActiveSheet();
    
    // Select cell A1
    activeSheet.GetRange("A1").Select();
    
    // Set the value of the selected cell to "Hello World"
    activeSheet.GetRange("A1").SetValue("Hello World");
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub ChangeCellValue()
    Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = "Hello World"
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/change-cell-value" dark />
