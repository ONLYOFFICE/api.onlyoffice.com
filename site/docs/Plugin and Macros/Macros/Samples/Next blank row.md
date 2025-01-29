---
order: -11
---

## Description

Finds the next available blank row in a worksheet. This macro allows you to get the blank at the very end of your data (not between it).

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function () 
{
    // Getting the active sheet
    var activeSheet = Api.ActiveSheet;
    // Minimum row index
    var indexRowMin = 0;
    // Maximum row index
    var indexRowMax = 1048576;
    // Column 'A'
    var indexCol = 0;
    // Row index for empty cell search
    var indexRow = indexRowMax;
    for (; indexRow >= indexRowMin; --indexRow) {
        // Getting the cell
        var range = activeSheet.GetRangeByNumber(indexRow, indexCol);
        // Checking the value
        if (range.GetValue() && indexRow !== indexRowMax) {
            range = activeSheet.GetRangeByNumber(indexRow + 1, indexCol);
            range.Select();
            break;
        }
    }
})();
```

Methods used: GetActiveSheet, GetRangeByNumber, Select

## Reference Microsoft VBA macro code

[This VBA macro](https://www.teachexcel.com/excel-tutorial/find-the-next-blank-row-with-vba-macros-in-excel_1261.html) was used as a base.

``` vb
Sub example()
    Range("A" & Rows.Count).End(xlUp).Offset(1).Select
End Sub
```

## Result

![Next blank row](/assets/images/plugins/next-blank-row.png)
