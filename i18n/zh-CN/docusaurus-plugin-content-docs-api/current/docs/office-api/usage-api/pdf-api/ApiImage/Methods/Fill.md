# Fill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.Fill](../../ApiDrawing/Methods/Fill.md)。

## 语法

```javascript
expression.Fill(fill);
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充图形对象的填充类型。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上为形状应用渐变填充。

```javascript editor-pdf
// Fill a shape with a radial gradient using the drawing's fill setter.

// Create a shape, build a two-stop radial gradient, and apply it with Fill.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const gradientFill = Api.CreateRadialGradientFill([gs1, gs2]);
shape.Fill(gradientFill);
```
