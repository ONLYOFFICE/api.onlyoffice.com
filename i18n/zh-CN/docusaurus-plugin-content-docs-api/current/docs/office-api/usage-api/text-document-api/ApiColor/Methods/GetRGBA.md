# GetRGBA

获取颜色的 RGBA 分量。

## 语法

```javascript
expression.GetRGBA();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Object

## 示例

此示例展示如何获取颜色的 RGBA 分量。

```javascript editor-docx
const doc = Api.GetDocument();

const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const hexColor = Api.HexColor('#FF0000');

const themeColorRGB = themeColor.GetRGBA();
const autoColorRGB = autoColor.GetRGBA();
const hexColorRGB = hexColor.GetRGBA();

const paragraph = doc.GetElement(0);
paragraph.AddText('RGBA of themeColor: ' + themeColorRGB.r + ', ' + themeColorRGB.g + ', ' + themeColorRGB.b + ', ' + themeColorRGB.a);
paragraph.AddLineBreak();
paragraph.AddText('RGBA of autoColor: ' + autoColorRGB.r + ', ' + autoColorRGB.g + ', ' + autoColorRGB.b + ', ' + autoColorRGB.a);
paragraph.AddLineBreak();
paragraph.AddText('RGBA of hexColor: ' + hexColorRGB.r + ', ' + hexColorRGB.g + ', ' + hexColorRGB.b + ', ' + hexColorRGB.a);
paragraph.AddLineBreak();
paragraph.AddText('RGBA for theme colors and auto color are always opaque black; actual color depends on the document theme.');

```
