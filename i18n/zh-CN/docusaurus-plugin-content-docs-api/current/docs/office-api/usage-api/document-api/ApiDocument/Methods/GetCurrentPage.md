# GetCurrentPage

返回当前页面的索引。

## 语法

```javascript
expression.GetCurrentPage();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索文档中当前页面的索引。

```javascript editor-docx
// How do I find which page the cursor is on in a document?

// Useful when building navigation tools that need to report the user's current position in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);
```
