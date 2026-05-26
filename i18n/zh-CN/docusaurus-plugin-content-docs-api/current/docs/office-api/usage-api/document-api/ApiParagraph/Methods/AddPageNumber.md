# AddPageNumber

将当前文档页码插入到段落中。

## 语法

```javascript
expression.AddPageNumber();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在文档的段落中插入自动当前页码字段。

```javascript editor-docx
// How do I display the current page number inside a header or footer paragraph in a document?

// Place a dynamic page counter in a paragraph so each printed page shows its own number in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First page");
paragraph.AddPageBreak();
paragraph.AddText("Second page");
paragraph.AddPageBreak();
paragraph.AddText("Third page");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
```
