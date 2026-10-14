# GetTableDescription

返回表格说明。

## 语法

```javascript
expression.GetTableDescription();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中表格的描述。

```javascript editor-pdf
// Read back the accessible description of a table in a PDF.

// Create a table, set its description, and display it in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableDescription('Sales data for Q1 2025');
const description = table.GetTableDescription();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table description: ' + description);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
