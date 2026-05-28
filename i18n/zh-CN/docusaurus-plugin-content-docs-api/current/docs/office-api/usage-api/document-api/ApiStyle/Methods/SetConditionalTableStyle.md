# SetConditionalTableStyle

设置应用于匹配指定表格样式类型的表格部分的条件格式属性。

## 语法

```javascript
expression.SetConditionalTableStyle(oTableStylePr);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTableStylePr | 必需 | [ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md) |  | 条件表格样式属性。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

在文档中使用条件规则为表格的特定区域应用不同的格式。

```javascript editor-docx
// How do I style individual parts of a table differently depending on their position in a document?

// Target table sections such as the whole table or header row with distinct formatting rules in a document.

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
