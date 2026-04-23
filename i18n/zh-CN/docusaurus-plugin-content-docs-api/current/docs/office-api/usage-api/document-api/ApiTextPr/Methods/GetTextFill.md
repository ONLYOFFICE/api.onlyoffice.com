# GetTextFill

从当前文本属性获取文本填充。

## 语法

```javascript
expression.GetTextFill();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

此示例展示如何获取文本属性的文本填充。

```javascript editor-docx
const doc = Api.GetDocument();

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetOutLine(Api.CreateStroke(0, Api.CreateNoFill()));
textPr.SetTextFill(Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
textPr.SetFontFamily('Comic Sans MS');

const textArt = Api.CreateWordArt(textPr, 'ONLYOFFICE', 'textArchUp', null, null, 0, 200 * 36000, 100 * 36000);
const paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);

const textArtFill = textPr.GetTextFill();
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 130 * 36000, 30 * 36000, textArtFill, stroke);
drawing.GetDocContent().GetElement(0).AddText('This is a rectangle with the same fill as the WordArt text.');
paragraph.AddDrawing(drawing);

```
