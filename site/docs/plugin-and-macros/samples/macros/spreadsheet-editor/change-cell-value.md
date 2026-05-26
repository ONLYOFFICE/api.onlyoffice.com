---
hide_table_of_contents: true
description: Change the value of specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Change cell value

Changes the selected cell value.

:::note
This macro was converted from VBA code using the [AI plugin](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin).
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

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub ChangeCellValue()
    Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = "Hello World"
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/change-cell-value.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/change-cell-value.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
