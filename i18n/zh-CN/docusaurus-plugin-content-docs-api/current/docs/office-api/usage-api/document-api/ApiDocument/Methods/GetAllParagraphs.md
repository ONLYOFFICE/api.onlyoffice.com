# GetAllParagraphs

从当前文档内容返回所有段落的数组。

继承自 [ApiDocumentContent.GetAllParagraphs](../../ApiDocumentContent/Methods/GetAllParagraphs.md)。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

获取文档中的所有段落。

```javascript editor-docx
// How do I collect every paragraph present in a document?

// Make the first paragraph bold to visually distinguish it from the rest of the content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
doc.AddElement(1, paragraph);
let paragraphs = doc.GetAllParagraphs();
paragraphs[0].SetBold(true);
```
