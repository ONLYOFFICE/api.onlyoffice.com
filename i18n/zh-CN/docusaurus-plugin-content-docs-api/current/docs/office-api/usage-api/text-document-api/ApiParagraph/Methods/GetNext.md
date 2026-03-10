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

此示例展示如何获取下一个段落。

```javascript editor-docx
// Get the next paragraph and make it bold.

// How to access the next paragraph.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
let nextParagraph = paragraph1.GetNext();
nextParagraph.SetBold(true);
```
