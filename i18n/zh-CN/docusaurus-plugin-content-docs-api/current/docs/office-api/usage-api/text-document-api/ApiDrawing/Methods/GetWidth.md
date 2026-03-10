# GetWidth

返回当前绘图的宽度。

## 语法

```javascript
expression.GetWidth();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

此示例展示如何获取绘图的宽度。

```javascript editor-docx
// How to print the width of the drawing.

// Create a rectangle and then show its width in mm.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 100 * 36000, 10 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);
let width = drawing.GetWidth();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing width: " + width / 36000 + " mm");
docContent.AddElement(0, paragraph);
```
