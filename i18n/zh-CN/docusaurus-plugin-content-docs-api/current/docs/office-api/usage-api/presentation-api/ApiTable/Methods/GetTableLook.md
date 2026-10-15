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

读取应用于表格的视觉样式选项。

```javascript editor-pptx
// Get the formatting flags that control table appearance and style.

// Create a table, apply styling flags, and read them back.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 4);
table.SetTableLook(true, false, false, false, false, true);
const tableLook = table.GetTableLook();
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("First column: " + tableLook.firstCol);
slide.RemoveAllObjects();
slide.AddObject(table);
```
