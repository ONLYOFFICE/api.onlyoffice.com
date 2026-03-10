# PointsToEmus

将磅转换为 EMU（英制度量单位）。

## 语法

```javascript
expression.PointsToEmus(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为 EMU 的磅数。 |

## 返回值

number

## 示例

此示例展示如何将磅转换为 EMU。

```javascript editor-pptx
const points = 1000;
const emus = Api.PointsToEmus(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + emus + ' english metric units.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
