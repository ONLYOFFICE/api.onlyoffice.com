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

此示例演示如何返回按指定位数左移后的数字。

```javascript editor-xlsx
// How to get a result from bits left shift.

// Use function to calculate bitwise left shift operation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITLSHIFT(4, 2));
```
