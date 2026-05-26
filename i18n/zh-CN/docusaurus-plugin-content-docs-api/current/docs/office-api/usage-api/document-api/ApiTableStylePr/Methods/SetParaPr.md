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

在文档中为表格样式的条件区域应用段落格式。

```javascript editor-docx
// How do I control paragraph alignment for a specific part of a table style in a document?

// Assign paragraph layout settings to a targeted section of a styled table in a document.

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
