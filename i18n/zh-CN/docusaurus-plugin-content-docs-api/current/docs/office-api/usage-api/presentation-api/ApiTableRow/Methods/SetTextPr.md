# SetTextPr

设置当前行的文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 将设置到当前行的文本属性。 |

## 返回值

boolean

## 示例

将文本格式应用于演示文稿中表格行的每个单元格。

```javascript editor-pptx
// The given ApiTextPr is pushed to all cells of the row at once, so a header row can be styled in one call.

// Fill the first row with captions and make its text bold in a single call.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
for (let i = 0; i < row.GetCellsCount(); i++) {
	row.GetCell(i).SetText("Header " + (i + 1));
}
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.SetTextPr(textPr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
