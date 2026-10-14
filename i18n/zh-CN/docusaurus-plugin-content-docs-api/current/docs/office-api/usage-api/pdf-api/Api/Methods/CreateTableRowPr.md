# CreateTableRowPr

创建空的表格行属性。

## 语法

```javascript
expression.CreateTableRowPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## 示例

在 PDF 中创建可重用的表格行属性对象。

```javascript editor-pdf
// Build row formatting settings before applying them to a table row in a PDF.

// Create empty row properties, set a minimum height, and apply them to every row of a table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(3, 3);
for (let i = 0; i < 3; i++) {
	const rowPr = Api.CreateTableRowPr();
	rowPr.SetHeight("atLeast", 1500);
	table.GetRow(i).SetRowPr(rowPr);
}

page.AddObject(table);
```
