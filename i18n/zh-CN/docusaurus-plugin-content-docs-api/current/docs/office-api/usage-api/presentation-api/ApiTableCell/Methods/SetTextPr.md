# SetTextPr

为当前单元格的内容设置文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将为当前单元格设置的文本属性。 |

## 返回值

boolean

## 示例

在演示文稿中将相同的文本格式应用于表格单元格的全部内容。

```javascript editor-pptx
// Useful for highlighting a header cell without formatting each text run separately.

// Make the text of the first cell bold and increase its font size.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetText("Quarterly report");
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
textPr.SetFontSize(30);
cell.SetTextPr(textPr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
