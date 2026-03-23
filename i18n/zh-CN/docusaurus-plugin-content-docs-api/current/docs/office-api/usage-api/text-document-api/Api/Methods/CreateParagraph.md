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

此示例创建一个新段落并将其插入到文档中。

```javascript editor-docx
// Creates the ApiParagraph object, adds a text to it, and inserts it into the ApiDocument class.

// How to create a paragraph with the specified text and add it to the current document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
