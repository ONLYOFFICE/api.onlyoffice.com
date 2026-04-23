# Ungroup

取消当前绘图组的组合。

## 语法

```javascript
expression.Ungroup();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何取消组合一个组绘图元素。

```javascript editor-pptx
// How to ungroup a grouped drawings.

// How to remove a grouping from objects.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(111, 255, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 130 * 36000, fill1, stroke);
shape1.SetPosition(608400, 1267200);
slide.AddObject(shape1);

const shape2 = Api.CreateShape("flowChartOnlineStorage", 100 * 36000, 65 * 36000, fill2, stroke);
shape2.SetPosition(304200, 633600);
slide.AddObject(shape2);

const group = slide.GroupDrawings([shape1, shape2]);
group.Ungroup();

const docContent1 = shape1.GetDocContent();
const paragraph1 = docContent1.GetElement(0);
paragraph1.AddText("Shapes are ungrouped");

const docContent2 = shape2.GetDocContent();
const paragraph2 = docContent2.GetElement(0);
paragraph2.AddText("Shapes are ungrouped");

```
