# GetLabel

返回当前容器的标签属性。

## 语法

```javascript
expression.GetLabel();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索分配给文档中内联内容控件的标签值。

```javascript editor-docx
// How do I read the label of an inline content control in a document?

// Confirm the numeric label set on an inline content control by printing it to the page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLabel(2147483647);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
doc.Push(paragraph);
```
