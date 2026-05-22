# GetLanguage

从当前文本属性获取语言。

## 语法

```javascript
expression.GetLanguage();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给文本运行的语言。

```javascript editor-docx
// How do I find out which language is set on a piece of text in a document?

// Inspect a text run to confirm the locale currently applied to it in a document.

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
textPr.SetLanguage("en-CA");
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let language = textPr.GetLanguage();
paragraph.AddText("Language: " + language);
doc.Push(paragraph);
```
