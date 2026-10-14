# GetAllowOverlap

返回是否允许绘图对象与其他绘图对象重叠。

继承自 [ApiDrawing.GetAllowOverlap](../../ApiDrawing/Methods/GetAllowOverlap.md)。

## 语法

```javascript
expression.GetAllowOverlap();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

返回文档中是否允许绘图对象与其他绘图对象重叠。

```javascript editor-docx
// Useful for getting the allow overlap state of a shape in a text document.

// Create a shape, enable overlap and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
drawing.SetAllowOverlap(true);
let docContent = drawing.GetContent();
let allowOverlap = drawing.GetAllowOverlap();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Allow overlap: " + allowOverlap);
docContent.AddElement(0, innerParagraph);
```
