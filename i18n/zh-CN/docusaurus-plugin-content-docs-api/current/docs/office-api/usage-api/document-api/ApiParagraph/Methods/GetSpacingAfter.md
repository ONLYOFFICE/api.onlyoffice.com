# GetSpacingAfter

返回当前段落的段后间距值。

继承自 [ApiParaPr.GetSpacingAfter](../../ApiParaPr/Methods/GetSpacingAfter.md)。

## 语法

```javascript
expression.GetSpacingAfter();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

读取文档中段落的段后间距值。

```javascript editor-docx
// How do I retrieve the space added after a paragraph in a document?

// Verify the exact gap set below a paragraph before displaying it as text in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph1.SetSpacingAfter(1440);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paragraph1.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
doc.Push(paragraph2);
```
