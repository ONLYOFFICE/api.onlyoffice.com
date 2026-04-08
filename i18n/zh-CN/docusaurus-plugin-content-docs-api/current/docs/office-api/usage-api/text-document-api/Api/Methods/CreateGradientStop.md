# CreateGradientStop

创建用于不同类型渐变的渐变光圈。

## 语法

```javascript
expression.CreateGradientStop(color, pos);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于渐变光圈的颜色。 |
| pos | 必需 | [PositivePercentage](../../Enumeration/PositivePercentage.md) |  | 以千分之一百分比度量的渐变光圈位置。 |

## 返回值

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## 示例

此示例展示如何创建用于不同类型渐变的渐变光圈。

```javascript editor-docx
// Creates two gradient stops of the specified RGB colors, creates a linear gradient fill with them, and uses it to create a shape in the current document.

// How to create the ApiGradientStop objects for the linear gradient fill.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
