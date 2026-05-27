# AddPageBreak

添加分页符，并从新页开始下一个元素。

## 语法

```javascript
expression.AddPageBreak();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文本运行内插入分页符以在文档的下一页继续文本。

```javascript editor-docx
// How do I make part of a text run appear on the following page in a document?

// Force the remaining text in a run to start at the top of a new page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
run.AddPageBreak();
run.AddText("This is the text which starts from the beginning of the second page. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
