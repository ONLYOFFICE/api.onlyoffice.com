# RemoveAllElements

从当前文本块中移除所有元素。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中文本运行的所有内容。

```javascript editor-docx
// How do I delete everything inside a text run in a document?

// Wipe out the contents of a run to start fresh in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is sample text №1.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText("This is sample text №2.");
paragraph.AddElement(run2);
run1.RemoveAllElements();
paragraph.AddLineBreak();
paragraph.AddText("The sample text №1 was removed from the document.");
```
