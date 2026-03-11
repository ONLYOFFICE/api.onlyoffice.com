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

此示例展示如何检查形状填充中使用的颜色是否为主题颜色。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartMagneticTape", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Is hexColor a theme color? " + hexColor.IsThemeColor());
worksheet.GetRange("A14").SetValue("Is themeColor a theme color? " + themeColor.IsThemeColor());

```
