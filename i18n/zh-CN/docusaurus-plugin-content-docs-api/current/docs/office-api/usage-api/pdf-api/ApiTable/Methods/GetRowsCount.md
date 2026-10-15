# GetRowsCount

返回当前表格中的行数。

## 语法

```javascript
expression.GetRowsCount();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取 PDF 中表格的行数。

```javascript editor-pdf
// Find out how many rows a table has in a PDF.

// Create a table, add a row, and display the row count in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const countBefore = table.GetRowsCount();
table.AddRow(null, true);
const countAfter = table.GetRowsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Rows before: ' + countBefore + ', after adding: ' + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
