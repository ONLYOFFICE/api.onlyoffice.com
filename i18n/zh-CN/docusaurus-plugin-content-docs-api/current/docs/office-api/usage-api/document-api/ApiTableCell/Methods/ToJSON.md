# ToJSON

将 ApiTableCellPr 对象转换为 JSON 对象。

继承自 [ApiTableCellPr.ToJSON](../../ApiTableCellPr/Methods/ToJSON.md)。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

JSON

## 示例

在文档中将表格单元格的属性导出为 JSON 字符串。

```javascript editor-docx
// How do I serialize a table cell into a JSON representation in a document?

// Save the full configuration of a table cell as plain text data in a document.

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
let cell = table.GetCell(0, 0);
let json = cell.ToJSON();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The ApiTableCell object in the JSON format: ").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(json);
doc.Push(paragraph);
```
