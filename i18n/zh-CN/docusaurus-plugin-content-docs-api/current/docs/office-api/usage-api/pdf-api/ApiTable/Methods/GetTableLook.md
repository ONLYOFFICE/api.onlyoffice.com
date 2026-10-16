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

读取 PDF 中应用于表格的样式选项。

```javascript editor-pdf
// Useful for checking which formatting options apply to a table before changing its style in a PDF.

// Retrieve the conditional formatting flags of a table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetTableLook(true, false, false, false, false, true);
const tableLook = table.GetTableLook();
table.GetRow(0).GetCell(0).AddText("First column: " + tableLook.firstCol + ", vertical banding: " + tableLook.bandVer);

page.AddObject(table);
```
