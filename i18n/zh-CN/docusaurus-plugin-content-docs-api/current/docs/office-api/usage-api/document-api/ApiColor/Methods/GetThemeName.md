# GetThemeName

如果颜色是主题颜色，则获取主题颜色名称。

## 语法

```javascript
expression.GetThemeName();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SchemeColorId](../../Enumeration/SchemeColorId.md) \| null

## 示例

从文档中的颜色对象检索主题颜色名称。

```javascript editor-docx
// How do I find out which theme slot a color belongs to in a document?

// Distinguish between a color defined by a hex value and one tied to a named theme slot in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const hexColor = Api.HexColor('#4080DE');
const themeColor = Api.ThemeColor('accent1');

paragraph.AddText('Theme name of hexColor: ' + hexColor.GetThemeName());
paragraph.AddLineBreak();
paragraph.AddText('Theme name of themeColor: ' + themeColor.GetThemeName());
```
