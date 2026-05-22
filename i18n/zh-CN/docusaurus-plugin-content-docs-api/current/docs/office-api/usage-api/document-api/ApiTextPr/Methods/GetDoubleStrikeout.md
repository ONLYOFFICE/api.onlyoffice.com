# GetDoubleStrikeout

从当前文本属性获取双删除线属性。

## 语法

```javascript
expression.GetDoubleStrikeout();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

确定文档中的文本是否有双删除线。

```javascript editor-docx
// How do I check if a piece of text has two strikethrough lines applied in a document?

// Inspect a text run to confirm whether double strikethrough formatting is active in a document.

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
textPr.SetDoubleStrikeout(true);
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let doubleStrikeout = textPr.GetDoubleStrikeout();
paragraph.AddText("Double strikeout property: " + doubleStrikeout);
doc.Push(paragraph);
```
