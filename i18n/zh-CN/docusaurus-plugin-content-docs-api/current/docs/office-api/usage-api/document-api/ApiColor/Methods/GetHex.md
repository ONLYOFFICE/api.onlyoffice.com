# GetHex

获取颜色的十六进制字符串表示。

## 语法

```javascript
expression.GetHex();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中颜色的十六进制表示。

```javascript editor-docx
// How to get the hex for a color in a document?

// Get the hex and display the result in a document.

const doc = Api.GetDocument();

const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const rgbaColor = Api.HexColor('#FF0000');

const themeColorHex = themeColor.GetHex();
const autoColorHex = autoColor.GetHex();
const rgbaColorHex = rgbaColor.GetHex();

const paragraph = doc.GetElement(0);
paragraph.AddText('Hex of themeColor: ' + themeColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex of autoColor: ' + autoColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex of rgbaColor: ' + rgbaColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex for theme colors and auto color are always opaque black; actual color depends on the document theme.');
```
