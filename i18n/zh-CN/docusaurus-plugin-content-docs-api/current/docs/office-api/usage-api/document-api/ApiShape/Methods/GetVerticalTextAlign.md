# GetVerticalTextAlign

获取可插入段落或文本块的形状内容的垂直对齐方式。

## 语法

```javascript
expression.GetVerticalTextAlign();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[VerticalTextAlign](../../Enumeration/VerticalTextAlign.md)

## 示例

读取文档中形状的垂直文本对齐方式。

```javascript editor-docx
// Useful for verifying vertical text placement before adjusting shape layout in a document.

// Retrieve the current vertical alignment of a shape's inner content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVerticalTextAlign("center");
let verticalAlign = drawing.GetVerticalTextAlign();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.AddElement(0, paragraph);
```
