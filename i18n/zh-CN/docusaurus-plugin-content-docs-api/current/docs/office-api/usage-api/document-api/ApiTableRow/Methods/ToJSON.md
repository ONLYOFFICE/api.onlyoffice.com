# ToJSON

将 ApiTableRowPr 对象转换为 JSON 对象。

继承自 [ApiTableRowPr.ToJSON](../../ApiTableRowPr/Methods/ToJSON.md)。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

在文档中将表格行导出为可移植的 JSON 表示形式。

```javascript editor-docx
// How do I serialize a table row into a storable format in a document?

// Capture the full structure of a table row as a JSON string in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetTableBorderTop("single", 32, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
table.SetTableBorderRight("single", 32, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 32, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
table.SetWidth("percent", 100);
let row = table.GetRow(1);
let json = row.ToJSON();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The ApiTableRow object in the JSON format: ").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(json);
doc.Push(paragraph);
```
