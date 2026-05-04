# SetShd

指定应用于表格单元格内容的底纹。

继承自 [ApiTableCellPr.SetShd](../../ApiTableCellPr/Methods/SetShd.md)。

## 示例

指定应用于表格单元格内容的底纹。

```javascript editor-docx
// Create a 3x3 table and add an orange shading to cell #1.

// Set shading to the table cell.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add add an orange shading to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetStyle(tableStyle);
doc.Push(table);
```
