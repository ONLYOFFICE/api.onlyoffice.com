# IsAutoColor

如果颜色设置为自动则返回 true。

## 语法

```javascript
expression.IsAutoColor();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的颜色是否设置为自动。

```javascript editor-docx
// How do I tell if a color uses the automatic setting in a document?

// Confirm which color objects resolve to the automatic color and which do not in a document.

const doc = Api.GetDocument();
const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('Is themeColor an auto color? ' + themeColor.IsAutoColor());
paragraph.AddLineBreak();
paragraph.AddText('Is autoColor an auto color? ' + autoColor.IsAutoColor());
```
