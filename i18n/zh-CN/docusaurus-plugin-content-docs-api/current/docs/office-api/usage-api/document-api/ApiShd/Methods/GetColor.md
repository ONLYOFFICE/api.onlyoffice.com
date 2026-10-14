# GetColor

返回底纹颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiShd](../ApiShd.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## 示例

检索文档中段落底纹的颜色。

```javascript editor-docx
// Read back the theme color used for a paragraph shading in a document.

// Shade a paragraph with the accent2 theme color and write the color name into the paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.SetShd(Api.CreateShd('clear', Api.Color('accent2')));
paragraph.AddText('Theme color of the paragraph shading: ' + paragraph.GetShd().GetColor().GetThemeName());
```
