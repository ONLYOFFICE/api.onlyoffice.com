# GetTableTitle

返回表格标题。

## 语法

```javascript
expression.GetTableTitle();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 中表格的标题。

```javascript editor-pdf
// Read back the accessible title of a table in a PDF.

// Create a table, set its title, and display the title in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableTitle('Quarterly Report');
const title = table.GetTableTitle();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table title: ' + title);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
