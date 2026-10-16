# Remove

删除当前表格行。

## 语法

```javascript
expression.Remove();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

删除 PDF 中的表格行。

```javascript editor-pdf
// Delete a row from a table in a PDF.

// Remove the first row from the table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('First row');
const para2 = Api.CreateParagraph();
para2.AddText('First row was removed');
row.GetCell(0).GetContent().Push(para);
row.Remove();
table.GetRow(0).GetCell(0).GetContent().Push(para2);

page.AddObject(table);
```
