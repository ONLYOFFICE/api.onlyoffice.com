# SetVerticalAlign

指定当前表格单元格内文本的垂直对齐方式。

## 语法

```javascript
expression.SetVerticalAlign(verticalAlign);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| verticalAlign | 必需 | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | 垂直对齐类型。 |

## 返回值

boolean

## 示例

设置 PDF 中表格单元格内文本的垂直对齐方式。

```javascript editor-pdf
// How do I position text vertically within a cell in a PDF?

// Align content to the top, middle, or bottom of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(1);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetVerticalAlign("bottom");

page.AddObject(table);
```
