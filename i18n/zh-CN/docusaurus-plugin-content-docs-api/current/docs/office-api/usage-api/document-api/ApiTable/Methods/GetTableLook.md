# GetTableLook

获取表格外观属性

## 语法

```javascript
expression.GetTableLook();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TableLook](../../Enumeration/TableLook.md)

## 示例

读取文档中应用了哪些表格样式格式镶边和突出显示。

```javascript editor-docx
// Useful for checking which formatting bands and highlights apply to a table before changing its style in a document.

// Retrieve the banded rows, banded columns, and corner highlight flags of a table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let table = Api.CreateTable(3, 3);
table.SetTableLook(true, true, true, true, true, true);
let tableLook = table.GetTableLook();
paragraph.AddText("Table look — first row: " + tableLook.firstRow + ", banded columns: " + tableLook.bandVer);
doc.Push(table);
```
