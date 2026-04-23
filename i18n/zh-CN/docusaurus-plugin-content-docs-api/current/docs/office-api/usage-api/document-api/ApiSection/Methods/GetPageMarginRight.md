# GetPageMarginRight

返回当前节中所有页面的右边距。

## 语法

```javascript
expression.GetPageMarginRight();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例指定此节中所有页面的页边距并返回它们。

```javascript editor-docx
// How to get right page margin.

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
