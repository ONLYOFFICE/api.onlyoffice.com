# IsThemeColor

如果颜色是主题颜色则返回 true。

## 语法

```javascript
expression.IsThemeColor();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的颜色是否为主题颜色。

```javascript editor-docx
// How can I is theme color using a color in a document?

// Is theme color for a color in a document.

const doc = Api.GetDocument();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Is themeColor a theme color? ' + themeColor.IsThemeColor());
```
