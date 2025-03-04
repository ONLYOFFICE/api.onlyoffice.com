# Sheet merger

Merges data from all sheets into the active sheet by copying the used range of each sheet and appending it.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    var aSheets = Api.GetSheets();
    var oMergedSheet = Api.GetActiveSheet();
    var currentRow = 0;

    for (var i = 0; i < aSheets.length; i++) {
        if (aSheets[i].GetName() != oMergedSheet.GetName()) {
            var sheet = aSheets[i];
            var data = sheet.GetUsedRange().GetValue();
            var range = sheet.GetUsedRange().Address;
            range = range.replace(/\$/g, "");

            let parts = range.split(":");
            let column1 = parts[0].match(/[A-Z]+/)[0];
            let column2 = parts[1].match(/[A-Z]+/)[0];

            let row1 = parseInt(parts[0].match(/\d+/)[0]) + currentRow;
            let row2 = parseInt(parts[1].match(/\d+/)[0]) + currentRow;

            currentRow = currentRow + parseInt(parts[1].match(/\d+/)[0]) + 1;

            var newRange = column1 + row1 + ":" + column2 + row2;
            console.log(newRange);

            oMergedSheet.GetRange(newRange).SetValue(data);
        }
    }
})();
```

Methods used: GetSheets, GetActiveSheet, GetName, GetUsedRange, GetValue, GetRange, SetValue

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub MergeSheets()
    Dim ws As Worksheet
    Dim activeWs As Worksheet
    Dim lastRow As Long
    Dim lastCol As Long
    Dim targetRow As Long
    targetRow = 1

    Set activeWs = ActiveSheet

    ' Loop through all sheets
    For Each ws In ThisWorkbook.Sheets
        If ws.Name <> activeWs.Name Then
            lastRow = ws.Cells(Rows.Count, 1).End(xlUp).Row
            lastCol = ws.Cells(1, Columns.Count).End(xlToLeft).Column

            ' Copy data range from sheet
            ws.Range(ws.Cells(1, 1), ws.Cells(lastRow, lastCol)).Copy
            activeWs.Cells(targetRow, 1).PasteSpecial Paste:=xlPasteValues

            ' Update target row position
            targetRow = targetRow + lastRow + 1
        End If
    Next ws

    Application.CutCopyMode = False
End Sub
```

## Result

<!-- imgpath -->

![](/assets/images/plugins/sheet-merger.png)
