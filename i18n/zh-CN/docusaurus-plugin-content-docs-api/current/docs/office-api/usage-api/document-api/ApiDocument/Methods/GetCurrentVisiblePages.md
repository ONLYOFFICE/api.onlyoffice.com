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

检索文档中所有当前可见页面的索引。

```javascript editor-docx
// How do I get a list of page numbers visible to the user in a document?

// Useful when synchronizing a thumbnail panel or sidebar with the pages the reader can see in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current visibles pages indexes is: " + doc.GetCurrentVisiblePages());
doc.Push(paragraph);
```
