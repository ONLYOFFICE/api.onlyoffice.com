# GetDocument

返回主文档。

## 语法

```javascript
expression.GetDocument();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md)

## 示例

此示例展示如何获取当前文档。

```javascript editor-docx
// Returns the current document object and adds a paragraph to it.

// How to add a paragraph to the current document.

// Creates the ApiParagraph object, adds a text to it, and inserts this object into the ApiDocument object.

// How to get the current document to work with it.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
