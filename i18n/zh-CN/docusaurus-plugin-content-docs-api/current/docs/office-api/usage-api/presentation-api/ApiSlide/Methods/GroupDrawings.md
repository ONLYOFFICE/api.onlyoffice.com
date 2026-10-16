# GroupDrawings

将当前幻灯片中的绘图数组进行组合。

## 语法

```javascript
expression.GroupDrawings(aDrawings);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aDrawings | 必需 | [DrawingForGroup](../../Enumeration/DrawingForGroup.md)[] |  | 要分组的绘图对象数组。 |

## 返回值

[ApiGroup](../../ApiGroup/ApiGroup.md)

## 示例

将多个形状对象合并为一个组。

```javascript editor-pptx
// Create and position two shapes on the slide.

// Combine them using the GroupDrawings method.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(111, 255, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("flowChartMagneticTape", 70 * 36000, 40 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 70 * 36000, 40 * 36000, fill2, stroke);
shape1.SetPosition(20 * 36000, 30 * 36000);
shape2.SetPosition(120 * 36000, 75 * 36000);
slide.AddObject(shape1);
slide.AddObject(shape2);
slide.GroupDrawings([shape1, shape2]);
```
