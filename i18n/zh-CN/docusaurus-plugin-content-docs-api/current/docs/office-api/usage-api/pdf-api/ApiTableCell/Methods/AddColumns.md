# AddColumns

向当前表格添加新列。

## 语法

```javascript
expression.AddColumns(nCount, isBefore);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | Number |  | 要添加的列数。 |
| isBefore | 可选 | boolean | false | 指定新列是添加在当前单元格之前还是之后。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在 PDF 中通过表格的某个单元格向表格添加新列。

```javascript editor-pdf
// Insert columns right after a specific cell in a PDF table.

// Add two columns after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two new columns added after this cell.');
cell.GetContent().Push(paragraph);
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Second cell.');
const lastCell = table.GetRow(0).GetCell(1);
lastCell.GetContent().Push(paragraph2);
cell.AddColumns(2, false);

page.AddObject(table);
```
