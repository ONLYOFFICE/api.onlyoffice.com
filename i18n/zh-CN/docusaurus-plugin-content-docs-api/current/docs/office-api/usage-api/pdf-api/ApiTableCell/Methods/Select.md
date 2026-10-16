# Select

选择当前表格单元格。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 中选择表格单元格，使其成为当前选区。

```javascript editor-pdf
// Programmatically select a single cell inside a table in a PDF.

// Create a table, select one of its cells, then change its background color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);
const cell = table.GetRow(1).GetCell(1);
cell.Select();
cell.SetBackgroundColor(Api.RGB(0, 122, 204));
```
