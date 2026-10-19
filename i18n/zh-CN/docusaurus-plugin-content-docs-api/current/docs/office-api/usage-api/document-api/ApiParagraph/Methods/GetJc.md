# GetJc

返回段落内容对齐方式。

继承自 [ApiParaPr.GetJc](../../ApiParaPr/Methods/GetJc.md)。

## 语法

```javascript
expression.GetJc();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"left" \| "right" \| "both" \| "center" \| undefined

## 示例

读取文档中段落所应用的文本对齐设置。

```javascript editor-docx
// How do I find out the justification type of a paragraph in a document?

// Verify a center-aligned paragraph by printing its justification value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");
let paraJc = paragraph.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + paraJc);
doc.Push(paragraph);
```
