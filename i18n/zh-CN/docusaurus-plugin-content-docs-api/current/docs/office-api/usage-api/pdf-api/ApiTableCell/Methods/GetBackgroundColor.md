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

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

获取 PDF 中表格单元格的背景颜色。

```javascript editor-pdf
// Read back the background color applied to a table cell in a PDF.

// Set a background color and read it back in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.RGB(255, 111, 61));
const color = cell.GetBackgroundColor();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Background color: ' + (color ? color.GetHex() : 'none'));
cell.GetContent().Push(paragraph);

page.AddObject(table);
```
