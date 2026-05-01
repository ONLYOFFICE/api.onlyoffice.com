# GetId

返回当前内容控件的唯一 ID。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中容器的 ID。

```javascript editor-docx
// How do I get the id in a document?

// Get the id using an inline content control object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with an ID set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetId("4815162342");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let contentControlId = inlineLvlSdt.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);
```
