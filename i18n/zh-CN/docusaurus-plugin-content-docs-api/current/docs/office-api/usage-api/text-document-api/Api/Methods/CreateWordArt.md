# CreateWordArt

使用指定的参数创建艺术字对象。

## 语法

```javascript
expression.CreateWordArt(textPr, text, transform, fill, stroke, rotAngle, width, height);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 可选 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | Api.CreateTextPr() | 文本属性。 |
| text | 可选 | string | "Your text here" | 艺术字对象的文本。 |
| transform | 可选 | [TextTransform](../../Enumeration/TextTransform.md) | "textNoShape" | 文本变换类型。 |
| fill | 可选 | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | 用于填充艺术字对象的颜色或图案。 |
| stroke | 可选 | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | 用于创建艺术字对象阴影的笔触。 |
| rotAngle | 可选 | number | 0 | 旋转角度。 |
| width | 可选 | [EMU](../../Enumeration/EMU.md) | 1828800 | 以英制度量单位度量的艺术字宽度。 |
| height | 可选 | [EMU](../../Enumeration/EMU.md) | 1828800 | 以英制度量单位度量的艺术字高度。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## 示例

此示例使用 "textArchUp" 文本变换类型创建艺术字对象。

```javascript editor-docx
// Creates a Text Art object using the specified text properties.

// How to create the ApiWordArt object and add it to the first paragraph of the document.

// Creates the empty text properties object and sets the bold property, font size, capitalized letters, color, and font family to it.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(Api.HexColor('#333333'));
textPr.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 150 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);
```
