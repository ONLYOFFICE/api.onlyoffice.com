# GetDocContent

返回可以插入段落或文本块的形状内部内容。

## 语法

```javascript
expression.GetDocContent();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

检索文档中形状的内部书写区域作为内容容器。

```javascript editor-docx
// How do I obtain the document-level content block held inside a shape in a document?

// Write into a shape by gaining access to its document content region in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent.AddElement(0, paragraph);
```
