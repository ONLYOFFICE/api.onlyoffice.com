# Sum of highlighted cells

Sums the answer of all highlighted cells in a spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function () {
    let worksheet = Api.GetActiveSheet();
    let range1 = worksheet.GetRange("B1"); // Set your range for the color reference
    let colorReference = range1.SetFillColor(Api.CreateColorFromRGB(91, 155, 213)); // Set targeted background color. To use fill color from the existing range, comment this line out
    let targetedColor = range1.GetFillColor();
    let range2 = worksheet.GetRange("A1:A16"); // Set the targeted range in the spreadsheet
    let result = worksheet.GetRange("A17"); // Set the cell where the result will be displayed
    let sum = 0;
    let cellColorCode;

    range2.ForEach(function (range) {
        let cellColor = range.GetFillColor();

        if (cellColor!== "No Fill"){
         cellColorCode = cellColor.GetRGB();
        } else {
            cellColorCode = null;
        }

        if (cellColorCode && cellColorCode === targetedColor.GetRGB()) {
            let value = range.GetValue();
            if (!isNaN(parseFloat(value))) {
                sum += parseFloat(value); 
            }
        }
    });
    result.SetValue(`The sum: ${sum}`)
})();
```

Methods used: [GetActiveSheet](/site/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/site/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFillColor](/site/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](/site/docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [GetFillColor](/site/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetFillColor.md), [ForEach](/site/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetRGB](/site/docs/office-api/usage-api/spreadsheet-api/ApiColor/Methods/GetRGB.md), [GetValue](/site/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub SumHighlightedCells()
    Dim cell As Range
    Dim total As Double
    
    ' Loop through each cell in the selection
    For Each cell In Selection
        ' Check if the cell contains a numeric value
        If IsNumeric(cell.Value) Then
            total = total + cell.Value
        End If
    Next cell
    
    ' Display the sum in a message box
    MsgBox "The sum of the highlighted cells is: " & total
End Sub
```

## Result

![Sum of highlighted cells](/assets/images/plugins/sum-of-highlighted-cells.png#gh-light-mode-only)![Sum of highlighted cells](/assets/images/plugins/sum-of-highlighted-cells.dark.png#gh-dark-mode-only)
