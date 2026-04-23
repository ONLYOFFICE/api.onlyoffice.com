# SetCellBorderTop

设置将显示在当前表格单元格顶部的边框。

## 语法

```javascript
expression.SetCellBorderTop(sType, nSize, nSpace, r, g, b);
```

`expression` - 表示 [ApiTableCellPr](../ApiTableCellPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 单元格顶部边框样式。 |
| nSize | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前单元格顶部边框的宽度，以点的八分之一为单位。 |
| nSpace | 必需 | [pt](../../Enumeration/pt.md) |  | 表格单元格顶部用于放置此边框的间距偏移量，以磅为单位。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

boolean

## 示例

此示例设置将显示在表格单元格顶部的边框。

```javascript editor-docx
// How to add border to the top of the cell.

// Create a 3x3 table and add the top 4 point black border to cell #1.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the top 4 point black border to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellBorderTop("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);
```
