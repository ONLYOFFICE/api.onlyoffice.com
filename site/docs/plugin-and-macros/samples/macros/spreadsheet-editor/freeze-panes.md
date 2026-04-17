---
hide_table_of_contents: true
description: Freeze rows and columns in a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

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

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetFreezePanes](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetFreezePanes.md), [Unfreeze](/docs/office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/Unfreeze.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [FreezeAt](/docs/office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/FreezeAt.md)

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

![Freeze panes](/assets/images/plugins/freeze-panes.png#gh-light-mode-only)![Freeze panes](/assets/images/plugins/freeze-panes.dark.png#gh-dark-mode-only)
