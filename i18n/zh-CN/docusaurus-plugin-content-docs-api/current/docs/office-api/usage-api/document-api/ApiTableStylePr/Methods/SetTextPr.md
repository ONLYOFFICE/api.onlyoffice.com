# SetTextPr

设置当前表格样式属性的文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将要设置的文本属性。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

在文档中为表格样式的条件区域应用文本格式。

```javascript editor-docx
// How do I make the text bold in a specific part of a table style in a document?

// Define the text appearance for a targeted section of a styled table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bold font weight to the text in cell #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("topLeftCell");
table.SetTableLook(true, true, true, true, true, true);
let textPr = Api.CreateTextPr();
textPr.SetBold(true);
tableStylePr.SetTextPr(textPr);

paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("Bold text");
paragraph = table.GetRow(0).GetCell(1).GetContent().GetElement(0);
paragraph.AddText("Normal text");

table.SetStyle(tableStyle);
doc.Push(table);
```
