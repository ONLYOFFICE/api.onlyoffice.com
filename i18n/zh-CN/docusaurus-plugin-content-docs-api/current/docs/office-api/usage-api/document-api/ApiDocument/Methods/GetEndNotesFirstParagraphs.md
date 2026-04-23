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

此示例展示如何获取文档中所有尾注的首段。

```javascript editor-docx
// How to get the first endnote paragraph, add text to it and make it bold.

// Retrieve all endnote first paragraph for further manipulation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);
```
