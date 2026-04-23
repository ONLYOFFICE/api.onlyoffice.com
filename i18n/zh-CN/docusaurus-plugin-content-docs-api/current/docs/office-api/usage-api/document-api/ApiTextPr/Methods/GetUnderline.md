# GetUnderline

从当前文本属性获取下划线属性。

## 语法

```javascript
expression.GetUnderline();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何查明文本是否带下划线。

```javascript editor-docx
// How to know whether a text is underlined or not.

// Get the text properties of the run and find whether it is underlined or not.

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
textPr.SetUnderline(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let underline = textPr.GetUnderline();
paragraph.AddText("Underline property: " + underline);
doc.Push(paragraph);
```
