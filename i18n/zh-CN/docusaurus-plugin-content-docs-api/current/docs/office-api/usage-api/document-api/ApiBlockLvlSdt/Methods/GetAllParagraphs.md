# GetAllParagraphs

返回当前内容控件中的段落对象集合。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

检索文档中内容控件内的所有段落。

```javascript editor-docx
// How do I get all paragraphs inside a content control in a document?

// Read every paragraph from a content control to apply formatting across them in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph, 0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph, 1);
doc.AddElement(0, blockLvlSdt);
let paragraphs = blockLvlSdt.GetAllParagraphs();
paragraphs[0].SetBold(true);
```
