# GetClassType

返回 ApiPresetColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiPresetColor](../ApiPresetColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"presetColor"

## 示例

获取文档中预设颜色对象的类类型。

```javascript editor-docx
// How can I get the class type of a preset color in a document?

// Get the class type of a preset color and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let presetColor = Api.CreatePresetColor("peachPuff");
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = presetColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
