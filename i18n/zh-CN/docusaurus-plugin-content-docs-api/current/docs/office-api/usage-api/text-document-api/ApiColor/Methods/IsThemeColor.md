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

此示例展示如何检查颜色是否为主题颜色。

```javascript editor-docx
const doc = Api.GetDocument();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Is themeColor a theme color? ' + themeColor.IsThemeColor());

```
