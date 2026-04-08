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

此示例展示如何获取当前文档中文本域的默认属性集。

```javascript editor-docx
// How to get default text properties of a document.

// Update the default text properties of the text elements.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");
```
