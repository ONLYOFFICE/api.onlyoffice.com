# GetInternalId

返回当前表格行的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取表格行的内部 ID。

```javascript editor-docx
const doc = Api.GetDocument();
const table = Api.CreateTable(3, 3);
table.SetWidth('percent', 100);
doc.Push(table);

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
	const colIndex = rowIndex;
	const cell = table.GetCell(rowIndex, colIndex);
	const cellParagraph = cell.GetContent().GetElement(0);
	const internalId = table.GetRow(rowIndex).GetInternalId();
	cellParagraph.AddText('This row internal ID: ' + internalId);
}

```
