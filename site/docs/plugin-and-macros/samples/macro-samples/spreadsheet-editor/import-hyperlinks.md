# Import hyperlinks

Imports hyperlinks between different worksheets in the spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  let worksheetA = Api.GetSheet("Sheet1");
  if (!worksheetA) {
      Api.AddSheet("Sheet1"); // Add Sheet1 if it doesn't exist
      worksheetA = Api.GetSheet("Sheet1");
  }
  let worksheetB = Api.GetSheet("Sheet2");
  if (!worksheetB) {
      Api.AddSheet("Sheet2"); // Add Sheet2 if it doesn't exist
      worksheetB = Api.GetSheet("Sheet2");
  }

  // Set data in the first worksheet. If you already have the data that you want to use, you can remove it.
  worksheetA.SetActive();
  worksheetA.GetRange("A1").SetValue("title1");
  worksheetA.GetRange("A2").SetValue("title2");
  worksheetA.GetRange("A3").SetValue("title2");
  worksheetA.GetRange("B1").SetValue("https://api.onlyoffice.com/docs/office-api/usage-api/spreadsheet-api/");
  worksheetA.GetRange("B2").SetValue("https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/");
  worksheetA.GetRange("B3").SetValue("https://api.onlyoffice.com/docs/office-api/usage-api/presentation-api/");
  worksheetA.GetRange("A1:B3").Select();

  let rowIndex = 0;
  let titles = [];
  let links = [];
  while (rowIndex < 10) {
    let titleCell = worksheetA.GetRangeByNumber(rowIndex, 0); // Assuming title is in column A
    let linkCell = worksheetA.GetRangeByNumber(rowIndex, 1); // Assuming link is in column B
    let title = titleCell.GetValue();
    let link = linkCell.GetValue();
    if (link) {
      titles.push(title); // Store titles in an array
      links.push(link); // Store links in an array
    }
    rowIndex++; // Increment the row index for the next iteration
  }
  let rangeB = Api.GetSelection();
  rangeB.ForEach(function (cell) {
    let cellValue = cell.GetValue();
    // Check if the cell value matches any of the titles from the array
    let index = titles.indexOf(cellValue);
    if (index !== -1) {
      let title = titles[index];
      let link = links[index];
      let address = cell.GetAddress(true, true, "xlA1", false);
      // Set the hyperlink in oWorksheetB
      worksheetB.SetHyperlink(address, link, "", title);
    }
  });
})();
```

Methods used: [GetSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheet.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetAddress](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [SetHyperlink](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetHyperlink.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub AddHyperlinks()
    Dim wsA As Worksheet, wsB As Worksheet
    Dim titles() As String, links() As String
    Dim rng As Range, cell As Range
    Dim i As Integer

    ' Set worksheets
    Set wsA = ThisWorkbook.Sheets("Sheet1")
    Set wsB = ThisWorkbook.Sheets("Sheet2")

    ' Read first 10 titles and links from Sheet1
    ReDim titles(0 To 9)
    ReDim links(0 To 9)
    For i = 0 To 9
        titles(i) = wsA.Cells(i + 1, 1).Value ' Column A
        links(i) = wsA.Cells(i + 1, 2).Value ' Column B
    Next i

    ' Loop through the selection on Sheet1
    Set rng = Selection
    For Each cell In rng
        For i = LBound(titles) To UBound(titles)
            If cell.Value = titles(i) Then
                ' Add hyperlink to Sheet2 at same address as the selected cell
                wsB.Hyperlinks.Add Anchor:=wsB.Cells(cell.Row, cell.Column), _
                                   Address:=links(i), _
                                   TextToDisplay:=titles(i)
            End If
        Next i
    Next cell
End Sub
```

## Result

<!-- imgpath -->

![Import hyperlinks](/assets/images/plugins/import-hyperlinks.png#gh-light-mode-only)![Import hyperlinks](/assets/images/plugins/import-hyperlinks.dark.png#gh-dark-mode-only)
