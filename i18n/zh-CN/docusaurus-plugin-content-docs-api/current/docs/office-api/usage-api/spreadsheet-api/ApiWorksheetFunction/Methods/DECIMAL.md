# DECIMAL

将给定基数的数字文本表示形式转换为十进制数。

## 语法

```javascript
expression.DECIMAL(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要转换的数字。字符串长度必须小于或等于 255 个字符。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 正在转换的数字的基数。大于或等于 2 且小于或等于 36 的整数。 |

## 返回值

number

## 示例

在电子表格中将任意进制的文本数字转换为十进制格式。

```javascript editor-xlsx
// What is a text number in a different base expressed as decimal in a spreadsheet?

// Transform your base-encoded text values into regular decimal numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DECIMAL(101, 2));
```
