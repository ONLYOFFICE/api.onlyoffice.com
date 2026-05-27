# CreateParagraph

创建新段落。

## 语法

```javascript
expression.CreateParagraph();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

向文档末尾添加带有文本的新段落。

```javascript editor-docx
// How do I create a blank paragraph, fill it with text, and append it to a document?

// Build a paragraph from scratch and place it at the bottom of a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
