# GetPosInParent

返回当前文本块在其父元素中的位置（索引）。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

确定文本运行在其父元素中的索引。

```javascript editor-docx
// The position is the text run's index within its containing element.

// Read a run's position within its paragraph and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Intro ");
let run = Api.CreateRun();
run.AddText("measured run");
paragraph.AddElement(run);
let position = run.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The run is at position " + position + " in its parent.");
doc.Push(report);
```
