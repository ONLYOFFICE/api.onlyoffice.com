# AVEDEV

返回数据点与其平均值的绝对偏差的平均值。

## 语法

```javascript
expression.AVEDEV(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| number[] |  | 最多 255 个数值，将返回其绝对偏差的平均值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称或数字数组。 |

## 返回值

number

## 示例

测量电子表格中一组数字与其平均值之间的离散程度。

```javascript editor-xlsx
// Find the average distance of values from their mean in a spreadsheet.

// Summarize data variability by averaging all absolute deviations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));
```
