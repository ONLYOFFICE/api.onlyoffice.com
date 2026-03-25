# BIN2HEX

将二进制数转换为十六进制数。

## 语法

```javascript
expression.BIN2HEX(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将被转换的二进制数。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的字符数。 |

## 返回值

number

## 示例

此示例演示如何将二进制数转换为十六进制数。

```javascript editor-xlsx
// How to get a hexadecimal representation of a binary number.

// Use function to convert a binary to hexadecimal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2HEX(1110011100, 4));
```
