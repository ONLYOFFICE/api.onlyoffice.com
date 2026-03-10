# SetCellMarginBottom

指定表格中特定单元格的单元格内容底部
与边框之间应保留的空间量。

## 语法

```javascript
expression.SetCellMarginBottom(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 如果此值为 &lt;code&gt;null&lt;/code&gt;，则使用默认表格单元格下边距，否则使用指定值覆盖当前单元格的表格单元格下边距。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何指定表格中特定单元格的单元格内容底部与边框之间应保留的空间量。

```javascript editor-pptx
// How to set the cell bottom margin for the current table cell.

// Specify the bottom margin value for the ApiTableCell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginBottom(600);

slide.RemoveAllObjects();
slide.AddObject(table);

```
