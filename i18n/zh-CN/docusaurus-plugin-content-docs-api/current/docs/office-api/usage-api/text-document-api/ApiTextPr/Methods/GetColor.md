# GetColor

从当前文本属性获取 RGB 颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

此示例获取文本的颜色属性。

```javascript editor-docx
// How to get a text color and apply it to the paragraph.

// Retrieve color properties of the text.

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
textPr.SetColor(Api.HexColor('#FF6F3D'));
paragraph.AddElement(run);
paragraph = Api.CreateParagraph();
let color = textPr.GetColor();
let type = color.GetClassType();
paragraph.AddText("Color type: " + type);
paragraph.SetColor(color);
doc.Push(paragraph);
```
