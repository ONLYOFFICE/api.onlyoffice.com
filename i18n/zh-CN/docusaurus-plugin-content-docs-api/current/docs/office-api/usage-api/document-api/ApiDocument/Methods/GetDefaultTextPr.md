# GetDefaultTextPr

返回当前文档中文本域的默认属性集。

## 语法

```javascript
expression.GetDefaultTextPr();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

读取并修改整个文档的默认文本格式属性。

```javascript editor-docx
// How do I set the default font family, size, and language for all text in a document?

// Change font settings at the document level so every text run inherits the new defaults in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");
```
