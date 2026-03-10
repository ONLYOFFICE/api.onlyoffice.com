# GetFontSize

从当前文本属性获取字体大小。

## 语法

```javascript
expression.GetFontSize();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[hps](../../Enumeration/hps.md)

## 示例

此示例展示如何获取文本的字体大小。

```javascript editor-docx
// How to know the font size of the form.

// Retrieve text properties of the form to find out its font size.

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
textPr.SetFontSize(30);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let fontSize = textPr.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
doc.Push(paragraph);
```
