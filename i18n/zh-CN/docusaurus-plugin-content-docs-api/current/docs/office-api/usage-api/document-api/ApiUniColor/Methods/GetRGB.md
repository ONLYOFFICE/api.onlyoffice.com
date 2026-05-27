# GetRGB

返回 RGB 格式的颜色值。

## 语法

```javascript
expression.GetRGB();
```

`expression` - 表示 [ApiUniColor](../ApiUniColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取文档中预设颜色的红、绿、蓝值。

```javascript editor-docx
// How do I extract the numeric color components from a named color in a document?

// Inspect exact color channel values of a shape's fill color in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const presetColor = Api.CreatePresetColor('peachPuff');
const fill = Api.CreateSolidFill(presetColor);
const drawing = Api.CreateShape('rect', 150 * 36000, 10 * 36000, fill, stroke);
firstParagraph.AddDrawing(drawing);

const rgbPacked = presetColor.GetRGB();
const rgb = {
	R: rgbPacked >> 16 & 0xFF,
	G: rgbPacked >> 8 & 0xFF,
	B: rgbPacked & 0xFF
};

const paragraph = Api.CreateParagraph();
paragraph.AddText('ApiPresetColor is inherited from ApiUniColor.\n');
let text = '\'peachPuff\' preset color in RGB format:';
text += '\nR: ' + rgb.R;
text += '\nG: ' + rgb.G;
text += '\nB: ' + rgb.B;
paragraph.AddText(text);
doc.Push(paragraph);
```
