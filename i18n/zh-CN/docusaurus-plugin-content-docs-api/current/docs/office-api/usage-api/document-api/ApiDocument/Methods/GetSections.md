# GetSections

返回文档中的节对象集合。

## 语法

```javascript
expression.GetSections();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSection](../../ApiSection/ApiSection.md)[]

## 示例

检索文档中的所有节。

```javascript editor-docx
// How do I access every section object in a document?

// Inspect the type of a newly created section by reading it from the sections collection in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section1 = doc.CreateSection(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph in a new section");
doc.Push(paragraph);
let sections = doc.GetSections();
paragraph = Api.CreateParagraph();
let classType = sections[1].GetClassType();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
