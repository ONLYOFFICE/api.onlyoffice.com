# PointsToMillimeters

将磅转换为毫米。

## 语法

```javascript
expression.PointsToMillimeters(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为毫米的磅数。 |

## 返回值

number

## 示例

此示例展示如何将磅转换为毫米。

```javascript editor-pdf
const points = 100;
const millimeters = Api.PointsToMillimeters(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + millimeters + ' millimeters.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);

```
