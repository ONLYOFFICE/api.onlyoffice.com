# GetSpacingBefore

返回当前段落的段前间距值。

继承自 [ApiParaPr.GetSpacingBefore](../../ApiParaPr/Methods/GetSpacingBefore.md)。

## 语法

```javascript
expression.GetSpacingBefore();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

读取文档中段落的段前间距值。

```javascript editor-docx
// How do I retrieve the space added before a paragraph in a document?

// Confirm the top gap of a paragraph by reading it back and appending it as text in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is an example of setting a space before a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the second paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.SetSpacingBefore(1440);
paragraph2.AddLineBreak();
let spacingBefore = paragraph2.GetSpacingBefore();
paragraph2.AddText("Spacing before: " + spacingBefore);
doc.Push(paragraph2);
```
