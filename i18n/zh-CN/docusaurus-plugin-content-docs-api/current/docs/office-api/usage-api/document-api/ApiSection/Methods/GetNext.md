# GetNext

返回下一节（如果存在）。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSection](../../ApiSection/ApiSection.md) \| null

## 示例

导航到文档中当前节之后的节。

```javascript editor-docx
// How do I access the section that comes right after a given section in a document?

// Move forward to the next section to adjust its layout settings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section1 = doc.CreateSection(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph in the first section");
doc.Push(paragraph);
let section2 = doc.CreateSection(paragraph);
let nextSection = section1.GetNext();
nextSection.SetPageMargins(7200, 2880, 1440, 5760);
```
