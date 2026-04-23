# GetAllShapes

从文档内容返回形状对象集合。

## 语法

```javascript
expression.GetAllShapes();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)[]

## 示例

此示例展示如何从文档内容获取形状对象集合。

```javascript editor-docx
// Get all shapes added to the document.

// How to retrieve all shapes and fill with color the second one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 95 * 36000, 85 * 36000, fill, stroke);
paragraph.AddDrawing(shape1);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape2 = Api.CreateShape("ellipse", 90 * 36000, 80 * 36000, fill, stroke);
paragraph = Api.CreateParagraph();
paragraph.AddDrawing(shape2);
let docContent = shape1.GetDocContent();
docContent.AddElement(0, paragraph);
let shapes = docContent.GetAllShapes();
docContent = shapes[0].GetDocContent();
let classType = shapes[0].GetClassType();
paragraph = docContent.GetElement(0);
paragraph.AddText("Class Type = " + classType);
paragraph.SetColor(Api.HexColor('#333333'));
shapes[0].SetVerticalTextAlign("bottom");
```
