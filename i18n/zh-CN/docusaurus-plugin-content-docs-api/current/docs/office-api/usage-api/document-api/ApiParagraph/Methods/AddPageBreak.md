# AddPageBreak

添加分页符，并从下一页开始下一个元素。

## 语法

```javascript
expression.AddPageBreak();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

使用分页符将文档中的段落内容拆分到两个页面。

```javascript editor-docx
// How do I force the text that follows to start at the top of the next page in a document?

// Divide a long paragraph so that a chosen point becomes the opening line of a new page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
paragraph.AddPageBreak();
paragraph.AddText("This is the text which starts from the beginning of the second page. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
```
