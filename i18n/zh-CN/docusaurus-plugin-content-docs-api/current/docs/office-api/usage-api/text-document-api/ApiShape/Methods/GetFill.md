# GetFill

从当前形状获取填充属性。

## 语法

```javascript
expression.GetFill();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md) \| null

## 示例

Gets the fill properties from a shape and displays detailed information.

```javascript editor-docx
// Creates a shape with gradient fill, retrieves it and shows fill details.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
let retrievedFill = shape.GetFill();
if (retrievedFill) {
    paragraph.AddText("Fill type: " + retrievedFill.GetType());
}

```
