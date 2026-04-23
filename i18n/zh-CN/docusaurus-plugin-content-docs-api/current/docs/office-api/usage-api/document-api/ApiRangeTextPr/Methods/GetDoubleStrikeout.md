# GetDoubleStrikeout

从当前文本属性获取双删除线属性。

## 语法

```javascript
expression.GetDoubleStrikeout();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例查明文本是否设置了双删除线属性。

```javascript editor-docx
// How to know whether a text is crossed by two horizontal lines.

// Retrieve text properties of the form to find out whether it is double stroke out.

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
