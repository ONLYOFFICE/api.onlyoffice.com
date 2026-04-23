# SetCellMarginRight

指定表格中特定单元格的当前单元格内容右侧
与右边框之间应保留的空间量。

## 语法

```javascript
expression.SetCellMarginRight(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 如果此值为 &lt;code&gt;null&lt;/code&gt;，则使用默认表格单元格右边距，否则使用指定值覆盖当前单元格的表格单元格右边距。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例指定表格中特定单元格的当前单元格内容右侧与右边框之间应保留的空间量。

```javascript editor-pptx
// How to set the cell right margin for the current table cell.

// Specify the right margin value for the ApiTableCell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginRight(600);

slide.RemoveAllObjects();
slide.AddObject(table);

```
