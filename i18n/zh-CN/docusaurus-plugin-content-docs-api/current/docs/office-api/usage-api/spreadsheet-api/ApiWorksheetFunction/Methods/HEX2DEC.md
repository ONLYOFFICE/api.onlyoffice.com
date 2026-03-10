# HEX2DEC

将十六进制数转换为十进制数。

## 语法

```javascript
expression.HEX2DEC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的十六进制数。 |

## 返回值

number

## 示例

此示例演示如何将十六进制数转换为十进制数。

```javascript editor-xlsx
// How to get a decimal from hexadecimal number.

// Use a function to convert a hexadecimal number to decimal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2DEC("FFFFFFFF9C"));
```
