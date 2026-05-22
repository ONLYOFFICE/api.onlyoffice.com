# GetClassType

返回 ApiTableRow 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableRow"

## 示例

确定 PDF 中表格行对象的类型。

```javascript editor-pdf
// How do I identify what type a table row is in a PDF?

// Find out which class a table row belongs to in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = row.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

page.AddObject(table);
```
