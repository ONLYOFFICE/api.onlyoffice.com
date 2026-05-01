# GetParentParagraph

返回当前文本块的父段落。

## 语法

```javascript
expression.GetParentParagraph();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

获取文档中 run 的父段落以进行进一步操作。

```javascript editor-docx
// How to get the parent paragraph for a text run in a document?

// Get the parent paragraph and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
let parentParagraph = run.GetParentParagraph();
parentParagraph.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The parent paragraph of run was set to Italic");
doc.Push(paragraph);
```
