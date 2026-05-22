# CreateRadialGradientFill

创建径向渐变填充，使用所选径向渐变作为对象背景应用于对象。

## 语法

```javascript
expression.CreateRadialGradientFill(gradientStops);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| gradientStops | 必需 | number[] |  | 以千分之一百分比度量的渐变颜色光圈数组。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

在文档中为形状应用从一种颜色渐变到另一种颜色的径向渐变。

```javascript editor-docx
// How do I fill a shape with a color that radiates outward from the center in a document?

// Give a shape a circular color transition by setting gradient stops for the fill in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
