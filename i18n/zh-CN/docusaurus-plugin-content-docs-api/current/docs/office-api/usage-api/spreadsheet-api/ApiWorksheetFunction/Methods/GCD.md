# GCD

返回最大公约数。

## 语法

```javascript
expression.GCD(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 最多 255 个将返回最大公约数的数值。第一个参数是必需的，后续参数是可选的。 |

## 返回值

number

## 示例

查找电子表格中多个数字的最大公约数。

```javascript editor-xlsx
// How do I determine the largest number that divides all my values evenly in a spreadsheet?

// Get the highest common factor for a set of integers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GCD(28, 16, 878, 800, 1650, 2000));
```
