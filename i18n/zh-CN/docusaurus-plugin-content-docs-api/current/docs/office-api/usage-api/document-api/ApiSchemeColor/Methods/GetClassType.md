# GetClassType

返回 ApiSchemeColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSchemeColor](../ApiSchemeColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"schemeColor"

## 示例

读取文档中分配给配色方案颜色的类型标签。

```javascript editor-docx
// How do I find out what kind of object a scheme color is in a document?

// Confirm the category of a color object by checking its type identifier in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = schemeColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
