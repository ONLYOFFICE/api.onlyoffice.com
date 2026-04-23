# AutoColor

创建自动颜色。

## 语法

```javascript
expression.AutoColor();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

此示例展示如何创建自动颜色并将其用作字体颜色。

```javascript editor-docx
const doc = Api.GetDocument();
const color = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in auto color.');
paragraph.SetColor(color);

```
