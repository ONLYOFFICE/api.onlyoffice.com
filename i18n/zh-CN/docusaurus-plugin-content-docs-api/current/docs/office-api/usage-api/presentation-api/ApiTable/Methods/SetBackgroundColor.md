# SetBackgroundColor

为当前表格中的所有单元格设置背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 如果未传递，将清除背景颜色。 |

## 返回值

boolean

## 示例

在演示文稿中为表格的所有单元格设置背景颜色。

```javascript editor-pptx
// Useful for setting a background color for the entire table.

// Create a table and apply an orange background color to all cells.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(3, 3);
const color = Api.RGB(255, 111, 61);
table.SetBackgroundColor(color);

slide.RemoveAllObjects();
slide.AddObject(table);
```
