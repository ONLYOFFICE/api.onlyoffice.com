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

获取文档中的当前文档。

```javascript editor-docx
// Return the current document object and add a paragraph to it.

// Create the paragraph object, add a text to it, and insert this object into the document object.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
