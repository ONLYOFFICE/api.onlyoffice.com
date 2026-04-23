# GetPrevious

返回上一节（如果存在）。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSection](../../ApiSection/ApiSection.md) \| null

## 示例

此示例展示如何获取上一节。

```javascript editor-docx
// How to get prevoius section from the current one.

// Update the margins of the next section.

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
let previousSection = section2.GetPrevious();
previousSection.SetPageMargins(7200, 2880, 1440, 5760);
```
