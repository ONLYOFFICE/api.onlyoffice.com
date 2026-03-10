# GetInternalId

返回当前表格单元格的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example shows how to get the internal ID of a table cell.

```javascript editor-docx
const doc = Api.GetDocument();
const table = Api.CreateTable(3, 3);
table.SetWidth('percent', 100);
doc.Push(table);

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
	for (let colIndex = 0; colIndex < 3; colIndex++) {
		const cell = table.GetCell(rowIndex, colIndex);
		const cellParagraph = cell.GetContent().GetElement(0);
		cellParagraph.AddText('This cell ID: ' + cell.GetInternalId());
	}
}

```
