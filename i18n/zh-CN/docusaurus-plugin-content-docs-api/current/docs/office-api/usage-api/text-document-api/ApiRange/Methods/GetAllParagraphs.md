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

此示例展示如何获取表示指定范围中所有段落的段落集合。

```javascript editor-docx
// How to get all paragraphs.

// Retrieve all paragraphs from the document and make the first one bold.

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
