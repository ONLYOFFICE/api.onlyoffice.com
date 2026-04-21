# GetClassType

返回 ApiStroke 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"stroke"

## 示例

检查文档中笔触返回的类类型。

```javascript editor-docx
// How do I check what type a stroke object is in a document?

// Retrieve and output the class type string for a stroke in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let drawing = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = stroke.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
