# PixelsToEmus

将像素转换为 EMU（英制度量单位）。

## 语法

```javascript
expression.PixelsToEmus(px);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | 必需 | number |  | 要转换为 EMU 的像素数。 |

## 返回值

number

## 示例

在电子表格中将像素数表示为英制度量单位。

```javascript editor-xlsx
// How do I turn a number of pixels into english metric units in a spreadsheet?

// Store the equivalent english metric unit value for a pixel measurement in a spreadsheet.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
const text = pixels + ' pixels are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
