# VAR_S

基于样本估算方差（忽略样本中的逻辑值和文本）。

## 语法

```javascript
expression.VAR_S(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 255 个数值，用于计算方差。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

在电子表格中基于样本估计方差（忽略样本中的逻辑值和文本）。

```javascript editor-xlsx
// The VAR_S function calculates sample variance from numeric data only.

// Apply the function to estimate variance ignoring logical and text values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.VAR_S(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
worksheet.GetRange("B2").SetValue(result);
```
