# GetConditionalTableStyle

返回一组格式属性，这些属性将有条件地应用于符合 sType 参数中指定要求的
表格部分。

## 语法

```javascript
expression.GetConditionalTableStyle(sType);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 可选 | [TableStyleOverrideType](../../Enumeration/TableStyleOverrideType.md) | "wholeTable" | 必须应用格式属性的表格部分。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

此示例展示如何获取一组格式属性，这些属性将有条件地应用于符合 sType 参数中指定要求的表格部分。

```javascript editor-docx
// How to find out a style that will be applied to the table elements whish satisfy the condition.

// Retrieve a conditional table style.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
doc.Push(table);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetTablePr().SetTableBorderTop("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderBottom("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderLeft("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderRight("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
tableStyle.GetTablePr().SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetItalic(true);
let cellContent = table.GetRow(0).GetCell(0).GetContent();
let paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is set to italic");
cellContent = table.GetRow(1).GetCell(0).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");
cellContent = table.GetRow(0).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font remains default");
cellContent = table.GetRow(1).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font also remains default");
```
