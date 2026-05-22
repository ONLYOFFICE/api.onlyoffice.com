# GetClassType

返回 ApiShape 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"shape"

## 示例

识别文档中形状的对象类型。

```javascript editor-docx
// How do I find out the category of a drawing element in a document?

// Confirm whether a drawn element belongs to the expected object type in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent.AddElement(0, paragraph);
```
