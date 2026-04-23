# Duplicate

创建指定幻灯片版式对象的副本，并将新幻灯片版式添加到幻灯片版式集合。

## 语法

```javascript
expression.Duplicate(nPos);
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | number | ApiMaster.GetLayoutsCount() | 将添加新幻灯片版式的位置。 |

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## 示例

此示例创建幻灯片版式的副本并将其应用于另一个幻灯片。

```javascript editor-pptx
// How to create a duplicate of a slide layout.

// Apply the layout of one slide to another by duplicating it.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
layout.AddObject(shape);

const slide = Api.CreateSlide();
presentation.AddSlide(slide);
const duplicateLayout = layout.Duplicate(1);
slide.ApplyLayout(duplicateLayout);

```
