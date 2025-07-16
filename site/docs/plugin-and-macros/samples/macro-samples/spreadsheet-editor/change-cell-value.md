# Change cell value

Changes the selected cell value.

> This macro was converted from VBA code using the [AI plugin](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin).

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
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

![Change cell value](/assets/images/plugins/change-cell-value.png#gh-light-mode-only)![Change cell value](/assets/images/plugins/change-cell-value.dark.png#gh-dark-mode-only)
