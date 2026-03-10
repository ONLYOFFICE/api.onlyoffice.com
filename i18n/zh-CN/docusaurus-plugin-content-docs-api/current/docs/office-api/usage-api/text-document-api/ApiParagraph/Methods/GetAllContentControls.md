# GetAllContentControls

返回段落中的内容控件对象集合。

## 语法

```javascript
expression.GetAllContentControls();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[]

## 示例

此示例展示如何获取段落中的内容控件对象集合。

```javascript editor-docx
// How to retrieve all content controls from the document.

// Get all content controls and show the class type of the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run);
let contentControls = paragraph.GetAllContentControls();
contentControls[0].GetElement(0).SetBold(true);
let classType = contentControls[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
