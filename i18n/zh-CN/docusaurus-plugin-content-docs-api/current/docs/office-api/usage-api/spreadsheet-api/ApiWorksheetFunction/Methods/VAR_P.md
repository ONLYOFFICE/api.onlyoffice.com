# VAR_P

基于整体总体计算方差（忽略总体中的逻辑值和文本）。

## 语法

```javascript
expression.VAR_P(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 255 个将计算方差的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何根据整个总体计算方差（忽略总体中的逻辑值和文本）。

```javascript editor-xlsx
// How to get variance based on the population.

// Use a function to calculate variance based on the entire population.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.VAR_P(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
worksheet.GetRange("B2").SetValue(result);


```
