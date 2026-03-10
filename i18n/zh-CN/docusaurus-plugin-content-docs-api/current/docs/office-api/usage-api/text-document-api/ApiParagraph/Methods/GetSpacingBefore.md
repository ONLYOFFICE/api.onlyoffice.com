# GetSpacingBefore

返回当前段落的段前间距值。

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

此示例展示如何获取当前段落的段前间距值。

```javascript editor-docx
// How to get the spacing before of the paragraph and display it.

// Get the paragraph spacing value.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingBefore(1440);
paragraph.AddLineBreak();
let spacingBefore = paraPr.GetSpacingBefore();
paragraph.AddText("Spacing before: " + spacingBefore);
doc.Push(paragraph);
```
