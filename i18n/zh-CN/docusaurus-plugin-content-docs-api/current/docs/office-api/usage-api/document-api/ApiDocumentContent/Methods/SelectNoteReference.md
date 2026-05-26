# SelectNoteReference

选择此脚注/尾注的引用。如果此文档内容不是脚注/尾注，则不执行任何操作。

## 语法

```javascript
expression.SelectNoteReference();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中选择脚注引用标记。

```javascript editor-docx
// How do I select the inline reference mark of a footnote in a document?

// Target a footnote's reference mark to resize it independently from the surrounding body text.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

footnote.SelectNoteReference();

doc.GetRangeBySelect().SetFontSize(48);
```
