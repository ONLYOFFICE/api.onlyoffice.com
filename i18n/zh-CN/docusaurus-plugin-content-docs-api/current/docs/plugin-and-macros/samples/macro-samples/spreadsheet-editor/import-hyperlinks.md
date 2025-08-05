# 导入超链接

导入表格中不同工作表之间的超链接。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  let worksheetA = Api.GetSheet("Sheet1");
  if (!worksheetA) {
      Api.AddSheet("Sheet1"); // 如果不存在则添加 Sheet1
      worksheetA = Api.GetSheet("Sheet1");
  }
  let worksheetB = Api.GetSheet("Sheet2");
  if (!worksheetB) {
      Api.AddSheet("Sheet2"); // 如果不存在则添加 Sheet2
      worksheetB = Api.GetSheet("Sheet2");
  }

  // 在第一个工作表中设置数据。如果你已有想用的数据，可以删除这部分。
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
    let titleCell = worksheetA.GetRangeByNumber(rowIndex, 0); // 假设标题在 A 列
    let linkCell = worksheetA.GetRangeByNumber(rowIndex, 1); // 假设链接在 B 列
    let title = titleCell.GetValue();
    let link = linkCell.GetValue();
    if (link) {
      titles.push(title); // 将标题存入数组
      links.push(link);   // 将链接存入数组
    }
    rowIndex++; // 行索引递增，处理下一行
  }
  let rangeB = Api.GetSelection();
  rangeB.ForEach(function (cell) {
    let cellValue = cell.GetValue();
    // 检查单元格值是否与标题数组中的某项匹配
    let index = titles.indexOf(cellValue);
    if (index !== -1) {
      let title = titles[index];
      let link = links[index];
      let address = cell.GetAddress(true, true, "xlA1", false);
      // 在 worksheetB 中设置超链接
      worksheetB.SetHyperlink(address, link, "", title);
    }
  });
})();
```

使用方法: [GetSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSheet.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetAddress](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [SetHyperlink](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetHyperlink.md)

## 参考 Microsoft VBA 宏代码

<!-- code generated with AI -->

```vb
Sub AddHyperlinks()
    Dim wsA As Worksheet, wsB As Worksheet
    Dim titles() As String, links() As String
    Dim rng As Range, cell As Range
    Dim i As Integer

    ' 设置工作表
    Set wsA = ThisWorkbook.Sheets("Sheet1")
    Set wsB = ThisWorkbook.Sheets("Sheet2")

    ' 从 Sheet1 读取前 10 个标题和链接
    ReDim titles(0 To 9)
    ReDim links(0 To 9)
    For i = 0 To 9
        titles(i) = wsA.Cells(i + 1, 1).Value ' Column A
        links(i) = wsA.Cells(i + 1, 2).Value ' Column B
    Next i

    ' 遍历 Sheet1 中的选区
    Set rng = Selection
    For Each cell In rng
        For i = LBound(titles) To UBound(titles)
            If cell.Value = titles(i) Then
                ' 在 Sheet2 中添加超链接，位置与选中单元格相同
                wsB.Hyperlinks.Add Anchor:=wsB.Cells(cell.Row, cell.Column), _
                                   Address:=links(i), _
                                   TextToDisplay:=titles(i)
            End If
        Next i
    Next cell
End Sub
```

## 结果

<!-- imgpath -->

![Import hyperlinks](/assets/images/plugins/import-hyperlinks.png#gh-light-mode-only)![Import hyperlinks](/assets/images/plugins/import-hyperlinks.dark.png#gh-dark-mode-only)
