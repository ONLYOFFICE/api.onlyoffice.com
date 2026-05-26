# BITRSHIFT

返回按指定位数右移后的数字。

## 语法

```javascript
expression.BITRSHIFT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要计算的二进制数的十进制表示形式。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 数字将右移的位数。 |

## 返回值

number

## 示例

在电子表格中将数字向右移动给定的位数。

```javascript editor-xlsx
// What happens when you move the binary representation rightward in a spreadsheet?

// Divide a value by moving its bits toward lower positions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITRSHIFT(13, 2));
```
