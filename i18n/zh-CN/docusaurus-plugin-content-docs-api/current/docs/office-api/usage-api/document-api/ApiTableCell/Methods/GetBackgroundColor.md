# GetBackgroundColor

返回当前表格单元格的背景颜色。

## 语法

```javascript
expression.GetBackgroundColor();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

读取表格单元格的背景颜色并在文档的其他位置重用。

```javascript editor-docx
// How do I retrieve the fill color of a table cell and apply it to a paragraph in a document?

// Match a paragraph's color to a cell's background by reading the color value in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);

let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.HexColor('#afafff'));
const backgroundColor = cell.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph has the same color as the table cell background: ' + backgroundColor.GetHex());
paragraph.SetColor(backgroundColor);
doc.Push(table);
```
