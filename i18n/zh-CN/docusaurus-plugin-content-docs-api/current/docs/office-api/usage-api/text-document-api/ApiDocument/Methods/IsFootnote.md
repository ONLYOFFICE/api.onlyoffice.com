# IsFootnote

检查当前文档内容是否为脚注。

## 语法

```javascript
expression.IsFootnote();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查 ApiDocumentContent 是否为脚注。

```javascript editor-docx
// How to add footnote to the document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let isFootnote = footnote.IsFootnote();
let isEndnote  = footnote.IsEndnote();
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Footnote " + isFootnote);
paragraph.AddLineBreak();
paragraph.AddText("Endnote " + isEndnote);

```
