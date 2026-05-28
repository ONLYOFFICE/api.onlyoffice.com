# AddLineBreak

在当前位置添加换行符，并从新行开始下一个元素。

## 语法

```javascript
expression.AddLineBreak();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在不开始新段落的情况下强制文本在文档中换行。

```javascript editor-docx
// How do I break a line mid-paragraph so the next text begins on a fresh line in a document?

// Keep two lines inside the same paragraph block while visually separating them with a hard line break in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text for the first line. Nothing special.");
paragraph.AddLineBreak();
paragraph.AddText("This is the text which starts from the beginning of the second line. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
```
