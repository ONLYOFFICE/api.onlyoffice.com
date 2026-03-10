# GetCurrentVisiblePages

返回当前可见页面的索引。

## 语法

```javascript
expression.GetCurrentVisiblePages();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number[]

## 示例

此示例展示如何获取当前可见页面的索引。

```javascript editor-docx
// How to get all indexes of non-hidden pages.

// How to display numbers of all visible pages.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current visibles pages indexes is: " + doc.GetCurrentVisiblePages());
doc.Push(paragraph);

```
