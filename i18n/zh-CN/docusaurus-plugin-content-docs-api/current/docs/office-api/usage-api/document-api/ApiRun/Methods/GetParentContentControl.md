# GetParentContentControl

返回包含当前文本块的内容控件。

## 语法

```javascript
expression.GetParentContentControl();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## 示例

查找文档中包裹文本运行的内容控件。

```javascript editor-docx
// How do I access the container holding a specific piece of text in a document?

// Reach the enclosing structured region from a text run in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("This is a block text content control.");
paragraph.Push(run);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let contentControl = run.GetParentContentControl();
let classType = contentControl.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
