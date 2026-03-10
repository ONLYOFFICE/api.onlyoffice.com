# SetParaPr

设置当前表格样式属性的段落属性。

## 语法

```javascript
expression.SetParaPr(oParaPr);
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oParaPr | 必需 | [ApiParaPr](../../ApiParaPr/ApiParaPr.md) |  | 将要设置的段落属性。 |

## 返回值

[ApiTableStylePr](../../ApiTableStylePr/ApiTableStylePr.md)

## 示例

此示例展示如何创建和设置将应用于表格中符合条件格式类型的所有段落的段落属性。

```javascript editor-docx
// How to set paragraph properties to the table style.

// Update the table style paragraph properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the text alignment to center for row #1:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("firstRow");
table.SetTableLook(true, true, true, true, true, true);
let paraPr = Api.CreateParaPr();
paraPr.SetJc("center");
tableStylePr.SetParaPr(paraPr);

paragraph = table.GetRow(0).GetCell(0).GetContent().GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center.");
table.SetStyle(tableStyle);
doc.Push(table);
```
