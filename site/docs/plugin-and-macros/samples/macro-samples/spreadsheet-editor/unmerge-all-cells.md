# Unmerge all cells

Unmerges all the merged cells in the active worksheet.

> This macro was converted from VBA code using the [AI plugin](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin).

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function(){
    // Get the active sheet
    var oWorksheet = Api.GetActiveSheet();
    
    // Get all cells in the worksheet by getting the used range
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // Check if there is any used range
    if (oUsedRange) {
        // Unmerge all cells in the used range
        oUsedRange.UnMerge();
    }
    
    // Alternative approach: Get the entire sheet range and unmerge
    // This ensures all possible merged cells are unmerged
    var oRange = oWorksheet.GetRange("A1:XFD1048576");
    oRange.UnMerge();
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [UnMerge](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md)

## Reference Microsoft VBA macro code

``` vb
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

## Result

![Unmerge-before](/assets/images/plugins/unmerge-before.png#gh-light-mode-only)![Unmerge-before](/assets/images/plugins/unmerge-before.dark.png#gh-dark-mode-only) ![Unmerge-after](/assets/images/plugins/unmerge-after.png#gh-light-mode-only)![Unmerge-after](/assets/images/plugins/unmerge-after.dark.png#gh-dark-mode-only)
