# SetTransparent

设置填充的透明度。

## 语法

```javascript
expression.SetTransparent(transparent);
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transparent | 必需 | number |  | 透明度值，范围从 0（完全不透明）到 1（完全透明）。 |

## 返回值

boolean

## 示例

在演示文稿的幻灯片中使形状的填充半透明。

```javascript editor-pptx
// Adjust how see-through a shape's fill is in a presentation.

// Fade a shape's solid fill on a slide so the background shows through in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
