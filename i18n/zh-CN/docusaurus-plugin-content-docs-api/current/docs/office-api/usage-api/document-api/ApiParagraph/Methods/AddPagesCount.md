# AddPagesCount

将当前文档的总页数插入到段落中。

## 语法

```javascript
expression.AddPagesCount();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

此示例将当前文档的总页数插入到段落中。

```javascript editor-docx
// How to add the number of pages to the text.

// Insert a pages count to the pxaragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First page");
paragraph.AddPageBreak();
paragraph.AddText("Second page");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page ");
paragraph.AddPageNumber();
paragraph.AddText(" of ");
paragraph.AddPagesCount();
```
