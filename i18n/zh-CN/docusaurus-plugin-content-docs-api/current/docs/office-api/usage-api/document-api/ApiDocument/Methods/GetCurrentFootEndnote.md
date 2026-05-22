# GetCurrentFootEndnote

如果光标当前在脚注或尾注内，则返回脚注或尾注内容，否则返回 null。

## 语法

```javascript
expression.GetCurrentFootEndnote();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

检索文档中当前光标位置的活动脚注。

```javascript editor-docx
// How do I get the footnote the cursor is currently inside in a document?

// Read the text of the active footnote to display or process it elsewhere in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let curFootnote = doc.GetCurrentFootEndnote();
paragraph = doc.GetElement(0);
let footnoteText = curFootnote.GetText();
paragraph.AddText(footnoteText);
```
