# GetOutLine

从当前文本属性获取文本轮廓。

继承自 [ApiTextPr.GetOutLine](../../ApiTextPr/Methods/GetOutLine.md)。

## 语法

```javascript
expression.GetOutLine();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md)

## 示例

读取文档中文本运行所应用的边框线条。

```javascript editor-docx
// How do I copy the outline style from one text run to another in a document?

// Transfer the stroke setting between two text runs in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetFontFamily("Comic Sans MS");
const textArt = Api.CreateWordArt(textPr, "<DEFAULT_COLOR />", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
paragraph.AddDrawing(textArt);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 221));
const outline = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 175, 204)));

const firstRun = Api.CreateRun();
firstRun.AddText("<PINK_COLOR />");
firstRun.SetTextFill(fill);
firstRun.SetOutLine(outline);

const secondRun = Api.CreateRun();
secondRun.AddText('<SAME_COLOR />');
secondRun.SetTextFill(firstRun.GetTextFill());
secondRun.SetOutLine(firstRun.GetOutLine());

paragraph = Api.CreateParagraph();
paragraph.Push(firstRun);
paragraph.Push(secondRun);
textArt.GetContent().Push(paragraph);
```
