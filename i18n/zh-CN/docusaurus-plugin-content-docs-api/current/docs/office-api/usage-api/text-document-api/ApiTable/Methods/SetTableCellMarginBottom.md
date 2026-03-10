# SetTableCellMarginBottom

指定在父表格（或表格行）中所有表格单元格的单元格内容底部范围与边框之间
保留的空间量。

## 语法

```javascript
expression.SetTableCellMarginBottom(nValue);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格底部范围下方的空间量值，以磅的二十分之一（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

此示例指定在父表格中所有表格单元格的单元格内容底部范围与边框之间保留的空间量。

```javascript editor-docx
// How to add margin to the bottom of the cell.

// Create a 3x3 table and add the bottom cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginBottom(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom cell margin is 36 points.");
doc.Push(table);
```
