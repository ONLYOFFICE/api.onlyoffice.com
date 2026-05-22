# GetSection

返回段落所在的节。

## 语法

```javascript
expression.GetSection();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSection](../../ApiSection/ApiSection.md)

## 示例

检索文档中包含给定段落的节。

```javascript editor-docx
// How do I find the section a paragraph belongs to in a document?

// Resize the page by accessing the section through one of its paragraphs in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);
```
