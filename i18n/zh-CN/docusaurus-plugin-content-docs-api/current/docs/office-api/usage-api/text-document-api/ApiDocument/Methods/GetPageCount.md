# GetPageCount

返回当前文档的页数。
💡 此方法对于大型文档可能较慢，因为它在完全重新计算之前会运行文档计算过程。

## 语法

```javascript
expression.GetPageCount();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取当前文档的页数。

```javascript editor-docx
// How to count the number of pages in the document.

// Display the number of pages of the document.

let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);
```
