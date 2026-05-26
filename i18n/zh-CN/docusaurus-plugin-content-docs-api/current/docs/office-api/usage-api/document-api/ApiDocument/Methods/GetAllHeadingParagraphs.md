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

检索文档中的所有标题段落。

```javascript editor-docx
// How do I collect every heading paragraph present in a document?

// Apply capitalization to the first heading when enforcing a consistent title style.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
let headingParagraphs = doc.GetAllHeadingParagraphs();
headingParagraphs[0].SetCaps(true);
```
