# GetAlias

返回当前容器的别名属性。

## 语法

```javascript
expression.GetAlias();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取容器的别名属性。

```javascript editor-docx
// How to get an alias of the inline text element.

// Retrieve the alias of the text element and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with alias '№1'.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetAlias("№1");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let alias = inlineLvlSdt.GetAlias();
paragraph = Api.CreateParagraph();
paragraph.AddText("Alias: " + alias);
doc.Push(paragraph);
```
