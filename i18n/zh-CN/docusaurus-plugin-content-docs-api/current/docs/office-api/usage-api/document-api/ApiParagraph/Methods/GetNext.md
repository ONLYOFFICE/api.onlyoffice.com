# GetNext

返回下一个段落。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

导航到下一个段落并在文档中为其应用粗体格式。

```javascript editor-docx
// How do I get a reference to the paragraph that follows the current one in a document?

// Bold the second paragraph by traversing from the first paragraph in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
let nextParagraph = paragraph1.GetNext();
nextParagraph.SetBold(true);
```
