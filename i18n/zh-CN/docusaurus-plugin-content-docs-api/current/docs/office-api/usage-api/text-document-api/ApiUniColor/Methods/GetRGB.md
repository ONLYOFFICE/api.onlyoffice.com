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

此示例展示如何获取 ApiUniColor 的 RGB 值（ApiPresetColor 继承自 ApiUniColor）。

```javascript editor-docx
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
