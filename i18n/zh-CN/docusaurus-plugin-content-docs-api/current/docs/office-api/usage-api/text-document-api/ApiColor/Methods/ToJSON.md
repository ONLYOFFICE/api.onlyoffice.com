# ToJSON

将 ApiColor 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何将不同类型的 ApiColor 对象转换为 JSON 字符串。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgbColor = Api.RGB(64, 128, 192);
paragraph.AddText('RGB JSON:\n' + rgbColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const rgbaColor = Api.RGBA(100, 150, 200, 128);
paragraph.AddText('RGBA JSON:\n' + rgbaColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const hexColor = Api.HexColor('#2E86C1');
paragraph.AddText('HEX JSON:\n' + hexColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const themeColor = Api.ThemeColor('accent5');
paragraph.AddText('Theme JSON:\n' + themeColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const autoColor = Api.AutoColor();
paragraph.AddText('Auto JSON:\n' + autoColor.ToJSON());

```
