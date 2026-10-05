# GetStyle

返回段落样式方法。

继承自 [ApiParaPr.GetStyle](../../ApiParaPr/Methods/GetStyle.md)。

## 语法

```javascript
expression.GetStyle();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md)

## 示例

读取文档中段落所应用的样式。

```javascript editor-docx
// How do I get the name of the style assigned to a paragraph in a document?

// Apply a heading style, then retrieve and display the style name to confirm the assignment in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paragraph.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());
```
