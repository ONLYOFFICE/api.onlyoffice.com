# SetColumnBackgroundColor

为包含当前单元格的列中的所有单元格设置背景颜色。

## 语法

```javascript
expression.SetColumnBackgroundColor(color);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 如果未传递，将清除背景颜色。 |

## 返回值

boolean

## 示例

在演示文稿中为包含该单元格的列中的所有单元格设置背景颜色。

```javascript editor-pptx
// Useful for coloring an entire column background.

// Set an orange background for the entire first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 4);
const cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(Api.RGB(255, 111, 61));
slide.RemoveAllObjects();
slide.AddObject(table);
```
