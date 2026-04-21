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
| emu | 必需 | [EMU](../../Enumeration/EMU.md) |  | 未提供描述。 |

## 返回值

[mm](../../Enumeration/mm.md)

## 示例

在电子表格中将 EMU 转换为毫米。

```javascript editor-xlsx
// How do I convert emus to millimeters in a spreadsheet?

// Convert emus to millimeters and display the result in a spreadsheet.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
const text = emus + ' emus are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
