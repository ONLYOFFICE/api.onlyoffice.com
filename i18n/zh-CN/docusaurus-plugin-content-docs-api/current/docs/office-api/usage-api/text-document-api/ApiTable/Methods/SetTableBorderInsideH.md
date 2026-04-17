# SetTableBorderInsideH

指定将在所有不在父表格最外边缘的水平表格单元格边框上显示的边框
（所有非顶部或底部边框的水平边框）。

Inherited from [ApiTablePr.SetTableBorderInsideH](../../ApiTablePr/Methods/SetTableBorderInsideH.md).

## 示例

此示例指定将在所有不在父表格最外边缘的水平表格单元格边框上显示的边框。

```javascript editor-docx
// How to set inside horizontal border to the table.

// How to create a 3x3 table and add the inside horizontal 4 point orange borders.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the inside horizontal 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderInsideH("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```

