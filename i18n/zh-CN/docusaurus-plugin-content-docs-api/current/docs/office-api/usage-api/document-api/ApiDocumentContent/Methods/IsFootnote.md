# IsFootnote

检查当前文档内容是否为脚注。

## 语法

```javascript
expression.IsFootnote();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检测文档中的注释是否为脚注。

```javascript editor-docx
// How do I check if a note content block belongs to a footnote in a document?

// Verify note type to decide whether to display bottom-of-page or end-of-document reference text.

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
