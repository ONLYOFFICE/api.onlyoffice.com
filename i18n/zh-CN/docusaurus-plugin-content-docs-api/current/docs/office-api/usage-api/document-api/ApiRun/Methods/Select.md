# Select

选择当前文本块。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将文本运行高亮显示为文档中的活动选区。

```javascript editor-docx
// How do I programmatically select a piece of text in a document?

// Mark a run so it appears selected for the user in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run.Select();
paragraph.AddLineBreak();
paragraph.AddText("The text from the first run was selected.");
```
