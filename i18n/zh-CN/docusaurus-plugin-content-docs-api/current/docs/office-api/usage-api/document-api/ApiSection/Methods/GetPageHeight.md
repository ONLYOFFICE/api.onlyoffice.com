# GetPageHeight

获取当前节的页面高度。

## 语法

```javascript
expression.GetPageHeight();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例展示如何获取页面高度。

```javascript editor-docx
// How to get the page height.

// Get the final section of the page and get its height.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let height = section.GetPageHeight();
paragraph.AddText("Page height = " + height);
```
