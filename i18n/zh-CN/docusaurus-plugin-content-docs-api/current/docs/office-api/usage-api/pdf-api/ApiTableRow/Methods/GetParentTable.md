# GetParentTable

返回当前行的父表格。

## 语法

```javascript
expression.GetParentTable();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

获取 PDF 中行的父表格。

```javascript editor-pdf
// Access the table that contains a given row in a PDF.

// Get the parent table from a row and change its background color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const parentTable = row.GetParentTable();
parentTable.SetBackgroundColor(Api.RGB(51, 133, 255));

page.AddObject(table);
```
