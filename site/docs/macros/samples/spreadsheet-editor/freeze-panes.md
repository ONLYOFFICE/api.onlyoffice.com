---
hide_table_of_contents: true
description: Freeze rows and columns in a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Freeze panes

Unfreezes panes, navigates the viewport to a target cell (A10), then refreezes panes at a different cell (D10).

```ts
(function () {
    let worksheet = Api.GetActiveSheet();

    // Step 1: Unfreeze panes so the view can scroll freely
    worksheet.GetFreezePanes().Unfreeze();

    // Step 2: Select the target cell
    worksheet.GetRange("A10").Select();

    // Step 3: Refreeze at D10
    worksheet
        .GetFreezePanes()
        .FreezeAt(worksheet.GetRange("D10")); // The cell you want to freeze panes at
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetFreezePanes](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetFreezePanes.md), [Unfreeze](../../../office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/Unfreeze.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [FreezeAt](../../../office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/FreezeAt.md)

## Reference Microsoft VBA macro code

```vb
Sub NavigateAndRefreeze()
    ActiveWindow.FreezePanes = False
    Application.Goto Reference:=Range("A10"), Scroll:=True
    Range("D10").Select
    ActiveWindow.FreezePanes = True
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/freeze-panes" dark />
