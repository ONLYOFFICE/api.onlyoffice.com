# GetSpacingAfter

返回当前段落的段后间距值。

## 语法

```javascript
expression.GetSpacingAfter();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例展示如何获取当前段落的段后间距值。

```javascript editor-docx
// How to get the spacing after of the paragraph and display it.

// Get the paragraph spacing value.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let paraPr = paragraph1.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paraPr.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
doc.Push(paragraph2);
```
