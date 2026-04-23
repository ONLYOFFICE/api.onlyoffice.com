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

此示例演示如何将给定基数中数字的文本表示形式转换为十进制数。

```javascript editor-xlsx
// How to get a decimal value from a text.

// Use function to convert a text value to decimal using base.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DECIMAL(101, 2));
```
