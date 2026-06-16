---
hide_table_of_contents: true
description: Convert cell formulas into their computed values.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Convert formulas into values

Converts all formulas in the active worksheet into values.

:::note
This macro was converted from VBA code using the [AI plugin](../../guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin).
:::

```ts
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

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub ConvertToValues()
    With ActiveSheet.UsedRange
        .Value = .Value
    End With
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/convert-formulas-into-values" dark />
