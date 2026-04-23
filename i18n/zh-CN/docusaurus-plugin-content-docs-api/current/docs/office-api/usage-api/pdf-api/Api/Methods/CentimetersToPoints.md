# CentimetersToPoints

将厘米转换为磅。

## 语法

```javascript
expression.CentimetersToPoints(cm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cm | 必需 | number |  | 要转换为磅的厘米数。 |

## 返回值

number

## 示例

此示例展示如何将厘米转换为磅。

```javascript editor-pdf
const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);

```
