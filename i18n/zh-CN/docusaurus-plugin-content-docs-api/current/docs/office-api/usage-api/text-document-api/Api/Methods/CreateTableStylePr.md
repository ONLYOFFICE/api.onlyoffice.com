# CreateTableStylePr

创建空的表格样式属性。

## 语法

```javascript
expression.CreateTableStylePr(sType);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TableStyleOverrideType](../../Enumeration/TableStyleOverrideType.md) |  | 必须应用格式属性的表格部分。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

此示例展示如何创建和使用条件表格样式属性。

```javascript editor-docx
// How to create a style that will be applied to the table elements whish satisfy the condition.

// Create a conditional table style properties.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);

table.SetWidth("percent", 100);

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);

let tableStylePr = Api.CreateTableStylePr('wholeTable');
let tablePr = tableStyle.GetTablePr();
tablePr.SetTableBorderTop("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderLeft("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderRight("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
tablePr.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
tableStylePr.GetTextPr().SetItalic(true);

tableStyle.SetConditionalTableStyle(tableStylePr);

let cellContent = table.GetRow(0).GetCell(0).GetContent();
let paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is set to italic");

cellContent = table.GetRow(1).GetCell(0).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");

cellContent = table.GetRow(0).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");

cellContent = table.GetRow(1).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");

doc.Push(table);
```
