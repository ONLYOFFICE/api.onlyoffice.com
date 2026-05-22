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

检索应用于电子表格中形状的主题颜色名称。

```javascript editor-xlsx
// How do I find out which theme color name is assigned to a fill in a spreadsheet?

// Look up the built-in theme color label behind a shape's fill and print it to a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Theme name: " + themeColor.GetThemeName());
```
