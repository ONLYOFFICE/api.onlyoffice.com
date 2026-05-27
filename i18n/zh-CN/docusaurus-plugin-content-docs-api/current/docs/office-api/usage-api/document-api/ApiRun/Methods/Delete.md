# Delete

删除当前文本块。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中的段落删除文本运行。

```javascript editor-docx
// How do I delete a piece of text that was added as a run in a document?

// Erase a specific run so it no longer appears in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is run №1.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText("This is run №2.");
paragraph.AddElement(run2);
run1.RemoveAllElements();
paragraph.AddLineBreak();
paragraph.AddText("The first run was removed from the document.");
```
