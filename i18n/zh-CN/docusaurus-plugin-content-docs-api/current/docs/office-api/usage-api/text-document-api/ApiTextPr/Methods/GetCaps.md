# GetCaps

返回具有当前文本属性的文本是否大写。

## 语法

```javascript
expression.GetCaps();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例查明当前表单是否大写。

```javascript editor-docx
// How to find out whether a text is capitalized or not.

// Get the property of the text that shows whether a text is in uppercase.

let doc = Api.GetDocument();
let myNewRunStyle = doc.CreateStyle("My New Run Style", "run");
let textPr = myNewRunStyle.GetTextPr();
textPr.SetCaps(true);
textPr.SetFontFamily("Calibri Light");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle);
run.AddText("This is a text run with its own style.");
textPr = run.GetTextPr();
textPr.SetCaps(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let caps = textPr.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + caps);
doc.Push(paragraph);
```
