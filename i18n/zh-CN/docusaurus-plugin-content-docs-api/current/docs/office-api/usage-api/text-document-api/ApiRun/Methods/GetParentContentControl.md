# GetParentContentControl

返回包含当前运行的内容控件。

## 语法

```javascript
expression.GetParentContentControl();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## 示例

此示例展示如何获取包含运行的内容控件。

```javascript editor-docx
// How to get an element that is a parent of the text.

// Get the parent content control of the text.

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
