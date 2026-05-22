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

读取电子表格中使用的颜色的十六进制表示。

```javascript editor-xlsx
// How do I obtain the hex code of a fill color applied to a shape in a spreadsheet?

// Inspect a shape's fill color and extract its hex value for display in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Hex: " + color.GetHex());
```
