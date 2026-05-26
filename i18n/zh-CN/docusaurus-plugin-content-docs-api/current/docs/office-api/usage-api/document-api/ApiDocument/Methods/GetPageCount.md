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

计算文档中的总页数。

```javascript editor-docx
// How do I find out how many pages a document has in a document?

// Insert the page count as readable text so readers see it at a glance in a document.

let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);
```
