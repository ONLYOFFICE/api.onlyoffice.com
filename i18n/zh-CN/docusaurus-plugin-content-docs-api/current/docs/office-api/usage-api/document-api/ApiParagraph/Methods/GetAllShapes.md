# GetAllShapes

返回段落中的形状对象集合。

## 语法

```javascript
expression.GetAllShapes();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)[]

## 示例

此示例展示如何获取段落中的形状对象集合。

```javascript editor-docx
// How to retrieve all shapes from the document.

// Get all shapes and color the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing2);
let drawings = paragraph.GetAllShapes();
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawings[1].Fill(fill);
```
