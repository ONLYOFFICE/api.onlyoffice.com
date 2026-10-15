# SetTableTitle

设置表格标题。

## 语法

```javascript
expression.SetTableTitle(title);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | 必需 | string |  | 要设置的表格标题。 |

## 返回值

boolean

## 示例

设置 PDF 中表格的标题。

```javascript editor-pdf
// Give a table an accessible title in a PDF.

// Create a table, set its title, and display the title in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableTitle('Quarterly Report');
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table title: ' + table.GetTableTitle());
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
