# GetClassType

返回 ApiRGBColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRGBColor](../ApiRGBColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"rgbColor"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiRGBColor.

// Retrieve class type of ApiRGBColor object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(rgbColor, 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = rgbColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
