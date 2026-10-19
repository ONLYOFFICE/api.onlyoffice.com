# SetLine

为当前图形对象设置轮廓属性。

继承自 [ApiDrawing.SetLine](../../ApiDrawing/Methods/SetLine.md)。

## 语法

```javascript
expression.SetLine(stroke);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建图形对象轮廓的笔触。 |

## 返回值

boolean

## 示例

在电子表格中通过基础 ApiDrawing 接口设置绘图对象的轮廓。

```javascript editor-xlsx
// SetLine is the base method for the outline and works for any drawing object added to a worksheet, not only shapes.

// Add a shape to a worksheet and give it a dark solid outline.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const noStroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape("rect", 90 * 36000, 27 * 36000, fill, noStroke, 0, 2 * 36000, 0, 3 * 36000);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
drawing.SetLine(outline);
```
