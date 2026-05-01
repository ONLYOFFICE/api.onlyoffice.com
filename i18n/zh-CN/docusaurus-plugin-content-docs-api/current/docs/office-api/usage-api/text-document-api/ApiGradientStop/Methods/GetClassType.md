# GetClassType

返回 ApiGradientStop 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiGradientStop](../ApiGradientStop.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"gradientStop"

## 示例

检查文档中渐变光圈返回的类类型。

```javascript editor-docx
// How do I check what type a gradient stop object is in a document?

// Retrieve and output the class type string for a gradient stop in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(914400, 0, 914400, 0);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
let classType = gs1.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
