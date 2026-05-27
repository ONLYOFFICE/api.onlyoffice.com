# GetEndNotesFirstParagraphs

返回当前文档中所有尾注的第一个段落。

## 语法

```javascript
expression.GetEndNotesFirstParagraphs();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

在文档中添加尾注并在其第一个段落中写入粗体文本。

```javascript editor-docx
// How do I access the first paragraph of each endnote to add formatted text in a document?

// Populate endnote content by writing directly to each endnote's opening paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);
```
