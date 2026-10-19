# GetHeight

返回当前表格行的高度。

## 语法

```javascript
expression.GetHeight();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

获取文档中表格行的计算高度。

```javascript editor-docx
// Read the actual row height value measured in English measure units.

// Create a table, set a row height and read the resulting value back.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
let row = table.GetRow(0);
row.SetHeight("atLeast", 720);
let rowHeight = row.GetHeight();
let paragraph = doc.GetElement(0);
paragraph.AddText("Row height: " + rowHeight);
```
