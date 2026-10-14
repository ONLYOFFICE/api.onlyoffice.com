# GetTintAndShade

返回应用于颜色的亮度偏移。

## 语法

```javascript
expression.GetTintAndShade();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取文档中主题颜色所存储的亮度偏移量。

```javascript editor-docx
// A theme color may be lightened or darkened; the shift is kept next to the theme name.

// Write the shift and the resulting color of a lightened accent into the document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const lighter = Api.ThemeColor("accent1", 0.4);
paragraph.AddText("Tint: " + lighter.GetTintAndShade() + ", color: " + lighter.GetHex());
paragraph.AddLineBreak();

const plain = Api.ThemeColor("accent1");
paragraph.AddText("Without a shift: " + plain.GetTintAndShade() + ", color: " + plain.GetHex());
```
