# GetParaPr

返回段落属性。

## 语法

```javascript
expression.GetParaPr();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## 示例

此示例展示如何获取段落属性。

```javascript editor-docx
// How to set the spacing line, justification and other properties of the text.

// Create a paragraph, add its text and properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraStyle = doc.GetDefaultStyle("paragraph");
paragraph = doc.GetElement(0);
paragraph.SetStyle(paraStyle);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
```
