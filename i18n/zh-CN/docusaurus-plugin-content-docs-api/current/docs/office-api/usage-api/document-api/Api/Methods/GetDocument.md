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

向当前文档添加带有文本的新段落。

```javascript editor-docx
// How do I access the open document and add content to it in a document?

// Insert a paragraph into the active document using a reference to it in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
