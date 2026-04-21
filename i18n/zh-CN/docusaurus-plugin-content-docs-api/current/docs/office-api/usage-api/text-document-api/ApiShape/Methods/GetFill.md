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

从形状获取填充属性并显示详细信息。创建带渐变填充的形状，获取并显示填充详细信息。

```javascript editor-docx
// How do I get the fill in a document?

// Get the fill using a shape object in a document.

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
