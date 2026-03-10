# GetParentTableCell

返回包含图形对象的父表格单元格。

## 语法

```javascript
expression.GetParentTableCell();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

此示例展示如何获取包含图形对象的父表格单元格。

```javascript editor-docx
// Get an element's parent table cell.

// How to show the shape's wrapper table cell.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
let tableStyle = doc.GetStyle("Bordered");
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
let cell = table.GetCell(1, 1);
cell.GetContent().GetElement(0).AddDrawing(drawing);
doc.Push(table);
let parentCell = drawing.GetParentTableCell();
let cellContent = parentCell.GetContent().GetElement(0);
cellContent.AddLineBreak();
cellContent.AddText("This is a parent cell");
```
