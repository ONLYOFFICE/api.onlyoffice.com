# GetPageWidth

获取当前节的页面宽度。

## 语法

```javascript
expression.GetPageWidth();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例展示如何获取页面宽度。

```javascript editor-docx
// How to get the page width.

// Get the final section of the page and get its width.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);
```
