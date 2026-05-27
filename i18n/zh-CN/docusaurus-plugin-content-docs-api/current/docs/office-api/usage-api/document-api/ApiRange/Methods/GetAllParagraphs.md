# GetAllParagraphs

返回表示指定范围中所有段落的段落集合。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

收集文档中所选范围内包含的所有段落。

```javascript editor-docx
// How do I get every paragraph that falls inside a text selection in a document?

// Pull together each paragraph from a bounded region to process them as a group in a document.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold("true");
```
