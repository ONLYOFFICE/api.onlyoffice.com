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

此示例将当前文档页码插入到段落中。

```javascript editor-docx
// How to add a page number to the text.

// Insert a page number to the paragraph.

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
