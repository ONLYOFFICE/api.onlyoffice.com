# GetHeight

获取当前表格行的高度。

## 语法

```javascript
expression.GetHeight();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

读取 PDF 中表格行的高度。

```javascript editor-pdf
// Useful for checking row dimensions before resizing a table in a PDF.

// Retrieve the current row height measurement in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
page.AddObject(table);

const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const rowHeight = row.GetHeight();
row.GetCell(0).AddText("Row height: " + rowHeight);
```
