# SetTextDirection

指定当前表格单元格的文本流动方向。

## 语法

```javascript
expression.SetTextDirection(textDirection);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textDirection | 必需 | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | 文本流方向。 |

## 返回值

boolean

## 示例

设置 PDF 中表格单元格内文本的流动方向。

```javascript editor-pdf
// How do I rotate text direction in a table cell in a PDF?

// Change the text orientation inside your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
cell.SetTextDirection("tbrl");
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);

page.AddObject(table);
```
