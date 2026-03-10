# GetTag

返回当前容器的标签属性。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取容器的标签属性。

```javascript editor-docx
// How to get tag of the inline text control.

// Display the tag of the inline content control.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a tag set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetTag("This is a tag");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let tag = inlineLvlSdt.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tag: " + tag);
doc.Push(paragraph);
```
