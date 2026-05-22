# GetClassType

返回 ApiUniColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUniColor](../ApiUniColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"uniColor"

## 示例

读取颜色对象的类型标识符并在文档中显示。

```javascript editor-docx
// How do I find out what kind of color object I am working with in a document?

// Confirm the category of a preset color by printing its type label in a document.

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
