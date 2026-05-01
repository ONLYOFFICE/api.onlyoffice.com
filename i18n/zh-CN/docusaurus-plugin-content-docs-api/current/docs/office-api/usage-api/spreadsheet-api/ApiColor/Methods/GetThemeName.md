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

获取电子表格中形状填充使用的主题颜色名称。

```javascript editor-xlsx
// How do I get the theme name in a spreadsheet?

// Get the theme name using a color object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Theme name: " + themeColor.GetThemeName());
```
