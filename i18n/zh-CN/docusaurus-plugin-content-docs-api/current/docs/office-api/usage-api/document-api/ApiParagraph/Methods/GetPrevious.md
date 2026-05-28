# GetPrevious

返回上一个段落。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

检索文档中紧接在另一个段落之前的段落。

```javascript editor-docx
// How do I access the paragraph that comes before a given paragraph in a document?

// Bold the preceding paragraph by stepping backward from the current one in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
let previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);
```
