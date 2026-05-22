# AGGREGATE

返回列表或数据库中的聚合值。

## 语法

```javascript
expression.AGGREGATE(arg1, arg2, arg3, args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定要使用的函数的数值：**1** - AVERAGE，**2** - COUNT，**3** - COUNTA，**4** - MAX，**5** - MIN， |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定应忽略哪些值的数值：**0** 或省略 - 嵌套的 SUBTOTAL 和 AGGREGATE 函数， |
| arg3 | 必需 | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 将返回聚合值的第一个数值。 |
| args | 必需 | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 253 个数值或包含要返回聚合值的值的单元格范围。 |

## 返回值

number

## 示例

在电子表格中汇总数字，同时跳过错误和隐藏行。

```javascript editor-xlsx
// Use the AGGREGATE function to calculate totals with filtering options in a spreadsheet.

// Get a single result value by choosing which calculation method to apply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));
```
