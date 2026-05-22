# AddColumnBreak

在当前文本块位置添加分栏符，并从新栏开始下一个元素。

## 语法

```javascript
expression.AddColumnBreak();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中的特定位置将文本运行拆分到两个栏。

```javascript editor-docx
// How do I push part of a text run into the next column in a document?

// Force text to continue from the top of the following column in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection(paragraph);
section.SetEqualColumns(2, 720);
let run = Api.CreateRun();
run.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
run.AddColumnBreak();
run.AddText("This is the text which starts from the beginning of the second column. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
