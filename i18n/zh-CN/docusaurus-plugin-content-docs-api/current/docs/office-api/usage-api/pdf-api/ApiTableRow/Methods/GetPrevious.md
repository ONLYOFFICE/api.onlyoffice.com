# GetPrevious

返回上一行（如果存在）。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

获取 PDF 中表格的上一行。

```javascript editor-pdf
// Access the row that precedes the current one in a table in a PDF.

// Display text in the second and first rows using GetPrevious in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const secondRow = table.GetRow(1);
const para = Api.CreateParagraph();
para.AddText('First row');
const para2 = Api.CreateParagraph();
para2.AddText('Second row');
secondRow.GetCell(0).GetContent().Push(para2);
secondRow.GetPrevious().GetCell(0).GetContent().Push(para);

page.AddObject(table);
```
