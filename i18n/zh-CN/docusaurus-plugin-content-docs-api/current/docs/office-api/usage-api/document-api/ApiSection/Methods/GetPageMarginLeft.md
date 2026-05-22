# GetPageMarginLeft

返回当前节中所有页面的左边距。

## 语法

```javascript
expression.GetPageMarginLeft();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

读取文档中节内页面的左边距。

```javascript editor-docx
// How do I find out the size of the left page margin for a section in a document?

// Retrieve the left spacing value to verify the page layout is correct in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(7200, 2880, 1440, 5760);
paragraph.AddText("This is a page with margins set. ");
paragraph.AddText("The left margin is 5 inches wide (" + section.GetPageMarginLeft() + " twentieths of a point). ");
paragraph.AddText("The top margin is 2 inches high (" + section.GetPageMarginTop() + " twentieths of a point). ");
paragraph.AddText("The right margin is 1 inch wide (" + section.GetPageMarginRight() + " twentieths of a point). ");
paragraph.AddText("The bottom margin is 4 inches high (" + section.GetPageMarginBottom() + " twentieths of a point). ");
```
