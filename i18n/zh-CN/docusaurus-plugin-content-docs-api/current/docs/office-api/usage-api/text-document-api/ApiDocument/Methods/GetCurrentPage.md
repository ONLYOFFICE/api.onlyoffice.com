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

此示例展示如何获取当前页面索引。

```javascript editor-docx
// How to know the order index of the current page.

// Get current page number.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);

```
