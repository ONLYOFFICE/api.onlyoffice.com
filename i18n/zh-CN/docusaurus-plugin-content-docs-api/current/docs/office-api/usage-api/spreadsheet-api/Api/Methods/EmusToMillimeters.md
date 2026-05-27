# EmusToMillimeters

将英制度量单位 (EMU) 转换为毫米。

## 语法

```javascript
expression.EmusToMillimeters(emu);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位 (EMU) 为单位的值。 |

## 返回值

[mm](../../Enumeration/mm.md)

## 示例

将内部测量单位转换为毫米并在电子表格中显示结果。

```javascript editor-xlsx
// How do I turn a raw measurement value into millimeters that I can read in a spreadsheet?

// Display a human-readable millimeter value from a low-level size unit in a spreadsheet.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
const text = emus + ' emus are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
