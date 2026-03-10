# GetInternalId

返回当前表格的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example shows how to get the internal ID of a table.

```javascript editor-docx
const doc = Api.GetDocument();
const table = Api.CreateTable(2, 1);
table.SetWidth('percent', 100);
doc.Push(table);

const internalId = table.GetInternalId();

const cell = table.GetCell(0, 0);
const cellContent = cell.GetContent();
const paragraph = cellContent.GetElement(0);
paragraph.AddText('This table internal ID: ' + internalId);

```
