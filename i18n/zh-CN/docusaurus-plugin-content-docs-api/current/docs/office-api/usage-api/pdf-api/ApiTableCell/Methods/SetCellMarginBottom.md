# SetCellMarginBottom

指定表格中特定单元格的单元格内容底部
与边框之间应保留的空间量。

## 语法

```javascript
expression.SetCellMarginBottom(margin);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| margin | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格边距。如果此值为 `null`，则使用默认边距，否则用指定值覆盖当前单元格的下边距。 |

## 返回值

boolean

## 示例

设置 PDF 中表格单元格的下边距。

```javascript editor-pdf
// How do I add space below the content inside a cell in a PDF?

// Adjust the spacing at the bottom of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginBottom(600);

page.AddObject(table);
```
