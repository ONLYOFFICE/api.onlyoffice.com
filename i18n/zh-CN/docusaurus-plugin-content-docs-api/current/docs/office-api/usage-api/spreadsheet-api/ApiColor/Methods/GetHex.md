# GetHex

获取颜色的十六进制字符串表示。

## 语法

```javascript
expression.GetHex();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取电子表格中形状填充颜色的十六进制字符串。

```javascript editor-xlsx
// How do I get the hex in a spreadsheet?

// Get the hex using a color object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Hex: " + color.GetHex());
```
