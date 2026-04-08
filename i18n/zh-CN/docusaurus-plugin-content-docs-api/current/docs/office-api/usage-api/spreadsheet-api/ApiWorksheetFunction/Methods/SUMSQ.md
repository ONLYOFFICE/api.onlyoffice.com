# SUMSQ

返回参数的平方和。

## 语法

```javascript
expression.SUMSQ(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean \| (number \| string \| boolean)[] |  | 最多 255 个将计算平方和的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、逻辑值或数字的文本表示形式、包含数字的单元格区域或数组。 |

## 返回值

number

## 示例

此示例演示如何返回参数的平方和。

```javascript editor-xlsx
// How to calculate the sum of the squares.

// Use a function to estimate the sum of the squares.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));
```
