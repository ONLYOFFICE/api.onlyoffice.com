# GetFooterDistance

返回从页面底边到页脚底边的距离。

## 语法

```javascript
expression.GetFooterDistance();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例设置页脚距离然后读取它。

```javascript editor-docx
// How to get footer distance of the section.

// Retrieve the current distance between the end of the page and the footer.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
section.SetFooterDistance(1440);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer. ");
paragraph.AddText("The distance from the page bottom to the footer is 1 inch (" + section.GetFooterDistance() + " twentieths of a point).");
```
