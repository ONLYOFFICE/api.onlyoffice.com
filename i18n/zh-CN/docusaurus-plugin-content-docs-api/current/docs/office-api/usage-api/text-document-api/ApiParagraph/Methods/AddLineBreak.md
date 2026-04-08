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

此示例在当前位置添加换行符，并从新行开始下一个元素。

```javascript editor-docx
// How to split the text of the paragraph.

// Add a line break to the text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text for the first line. Nothing special.");
paragraph.AddLineBreak();
paragraph.AddText("This is the text which starts from the beginning of the second line. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
```
