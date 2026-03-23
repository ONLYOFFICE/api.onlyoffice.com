# GetSlideByIndex

按位置返回演示文稿中的幻灯片。

## 语法

```javascript
expression.GetSlideByIndex(nIndex);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 演示文稿中的幻灯片编号（位置）。 |

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)

## 示例

此示例演示如何按位置获取演示文稿中的幻灯片。

```javascript editor-pptx
// How to find a slide from the presentation using its index.

// Get slide from the presentation by its index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

```
