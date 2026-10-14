# SetBackgroundColor

为当前表格行中的所有单元格设置背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 如果未传递，将清除背景颜色。 |

## 返回值

boolean

## 示例

在演示文稿中为表格行的所有单元格设置背景颜色。

```javascript editor-pptx
// Useful for coloring the background of a row.

// Set an orange background for the second row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
row.SetBackgroundColor(Api.RGB(255, 111, 61));
slide.RemoveAllObjects();
slide.AddObject(table);
```
