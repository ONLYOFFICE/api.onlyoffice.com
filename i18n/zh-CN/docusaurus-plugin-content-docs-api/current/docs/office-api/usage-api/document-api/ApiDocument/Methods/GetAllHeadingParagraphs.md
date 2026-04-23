# GetAllHeadingParagraphs

从当前文档返回所有标题段落。

## 语法

```javascript
expression.GetAllHeadingParagraphs();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

此示例展示如何获取文档中的所有标题段落。

```javascript editor-docx
// Get all heading paragraphs added to the document.

// How to retrieve all heading paragraphs and make capitalized the first one.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
let headingParagraphs = doc.GetAllHeadingParagraphs();
headingParagraphs[0].SetCaps(true);
```
