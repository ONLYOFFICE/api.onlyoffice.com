# BITLSHIFT

返回按指定位数左移后的数字。

## 语法

```javascript
expression.BITLSHIFT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要计算的二进制数的十进制表示形式。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 数字将左移的位数。 |

## 返回值

number

## 示例

在电子表格中将数字向左移动给定的位数。

```javascript editor-xlsx
// What happens when you move the binary representation leftward in a spreadsheet?

// Multiply a value by moving its bits toward higher positions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITLSHIFT(4, 2));
```
