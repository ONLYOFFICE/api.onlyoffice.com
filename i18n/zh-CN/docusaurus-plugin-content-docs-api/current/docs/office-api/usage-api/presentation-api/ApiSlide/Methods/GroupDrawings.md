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

此示例展示如何在幻灯片上组合绘图。

```javascript editor-pptx
// How to group two shapes.

// Create two ApiShape objects and group them.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(111, 255, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill2, stroke);
shape1.SetPosition(608400, 1267200);
shape2.SetPosition(608400, 1400000);
slide.AddObject(shape1);
slide.AddObject(shape2);
slide.GroupDrawings([shape1, shape2]);

```
