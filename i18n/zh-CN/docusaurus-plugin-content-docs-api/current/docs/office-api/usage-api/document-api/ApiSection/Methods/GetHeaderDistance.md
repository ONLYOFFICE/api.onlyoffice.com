# GetHeaderDistance

返回从页面顶边到页眉顶边的距离。

## 语法

```javascript
expression.GetHeaderDistance();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

读取文档中页面顶部边缘与页眉之间的间距。

```javascript editor-docx
// How do I find out how much space separates the header from the page top in a document?

// Check the header spacing to confirm that the layout matches the intended design in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("Scroll up the page to see it.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
section.SetHeaderDistance(1440);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header. ");
paragraph.AddText("The distance from the page top to the header is 1 inch (" + section.GetHeaderDistance() + " twentieths of a point).");
```
