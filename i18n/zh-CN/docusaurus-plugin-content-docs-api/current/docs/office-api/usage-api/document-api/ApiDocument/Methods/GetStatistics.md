# GetStatistics

返回以对象形式表示的文档统计信息，包含以下参数：
- **PageCount** - 页数；
- **WordsCount** - 字数；
- **ParagraphCount** - 段落数；
- **SymbolsCount** - 字符数；
- **SymbolsWSCount** - 含空格的字符数。

## 语法

```javascript
expression.GetStatistics();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

object

## 示例

将文档统计信息作为结构化对象检索。

```javascript editor-docx
// How do I read page count, word count, and paragraph count in a document?

// Check how many pages, words, symbols, and paragraphs a finished document contains.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let statistics = doc.GetStatistics();
paragraph.AddLineBreak();
paragraph = Api.CreateParagraph();
paragraph.AddText("Document statistics");
paragraph.SetBold(true);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Pages: " + statistics.PageCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Words: " + statistics.WordsCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraphs: " + statistics.ParagraphCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Symbols: " + statistics.SymbolsCount);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Symbols with spaces: " + statistics.SymbolsWSCount);
doc.Push(paragraph);
```
