# GetType

获取填充类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiFill](../ApiFill.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FillType](../../Enumeration/FillType.md)

## 示例

Gets the fill type and displays it.

```javascript editor-docx
// Creates shapes with different fill types and shows their types.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Solid fill
let solidFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, solidFill, stroke);
paragraph.AddDrawing(shape1);
let fill1 = shape1.GetFill();
paragraph.AddText("Solid fill type: " + fill1.GetType());
paragraph.AddLineBreak();

// Gradient fill
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let gradientFill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let shape2 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, gradientFill, stroke);
paragraph.AddDrawing(shape2);
let fill2 = shape2.GetFill();
paragraph.AddText("Gradient fill type: " + fill2.GetType());
paragraph.AddLineBreak();

// No fill
let noFill = Api.CreateNoFill();
let shape3 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, noFill, stroke);
paragraph.AddDrawing(shape3);
let fill3 = shape3.GetFill();
paragraph.AddText("No fill type: " + fill3.GetType());

```
