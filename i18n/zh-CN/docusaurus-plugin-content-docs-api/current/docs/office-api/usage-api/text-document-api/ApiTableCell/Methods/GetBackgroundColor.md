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

This example shows how to set and get the background color of the current table cell.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
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
