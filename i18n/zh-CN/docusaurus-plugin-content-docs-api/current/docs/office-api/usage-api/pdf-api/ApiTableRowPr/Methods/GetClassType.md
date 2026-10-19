# GetClassType

返回 ApiTableRowPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableRowPr](../ApiTableRowPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableRowPr"

## 示例

获取 PDF 中表格行属性对象的类类型。

```javascript editor-pdf
// Check that an object is a table row properties object in a PDF.

// Create empty row properties and display their class type in a table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const rowPr = Api.CreateTableRowPr();
const classType = rowPr.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + classType);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
