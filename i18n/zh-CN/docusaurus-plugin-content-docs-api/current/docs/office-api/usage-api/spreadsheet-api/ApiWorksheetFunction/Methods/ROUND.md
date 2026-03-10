# ROUND

将数字舍入到指定的位数。

## 语法

```javascript
expression.ROUND(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要舍入的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要舍入到的位数。如果此参数为负数，则数字将舍入到小数点左边。如果等于零，则数字将舍入到最接近的整数。 |

## 返回值

number

## 示例

此示例演示如何将数字舍入到指定的位数。

```javascript editor-xlsx
// How to round a number.

// Use a function to round a number to indicated number of digits.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUND(3.456, 2));
```
