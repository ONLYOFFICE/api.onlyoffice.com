---
hide_table_of_contents: true
---

# Convert formulas into values

Converts all formulas in the active worksheet into values.

> This macro was converted from VBA code using the [AI plugin](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin).

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function(){
    // Get the active sheet
    var oWorksheet = Api.GetActiveSheet();
    
    // Get the used range of the active sheet
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // Check if there is a used range
    if (oUsedRange) {
        // Get the current values from the range (this will evaluate formulas)
        var aValues = oUsedRange.GetValue();
        
        // Set the values back to the range (this replaces formulas with their calculated values)
        oUsedRange.SetValue(aValues);
    }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub ConvertToValues()
    With ActiveSheet.UsedRange
        .Value = .Value
    End With
End Sub
```

## Result

![Convert formulas into values](/assets/images/plugins/convert-formulas-into-values.png#gh-light-mode-only)![Convert formulas into values](/assets/images/plugins/convert-formulas-into-values.dark.png#gh-dark-mode-only)
