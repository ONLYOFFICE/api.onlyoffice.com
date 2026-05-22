# CreateSolidFill

创建纯色填充，使用所选纯色作为对象背景应用于对象。

## 语法

```javascript
expression.CreateSolidFill(color);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于元素填充的颜色。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

在演示文稿中用纯色填充形状。

```javascript editor-pptx
// How do I apply a solid color background to a shape in a presentation?

// Create a solid fill with an RGB color and apply it to a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgbColor = Api.RGB(255, 111, 61);
const fill = Api.CreateSolidFill(rgbColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
```
