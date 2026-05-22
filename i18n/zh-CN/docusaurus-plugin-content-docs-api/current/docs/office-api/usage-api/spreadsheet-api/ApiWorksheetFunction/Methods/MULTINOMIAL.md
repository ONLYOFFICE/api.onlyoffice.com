# MULTINOMIAL

返回数字之和的阶乘与阶乘乘积的比率。

## 语法

```javascript
expression.MULTINOMIAL(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 最多 255 个将返回多项式的数值。第一个参数是必需的，后续参数是可选的。 |

## 返回值

number

## 示例

计算电子表格中一组数字的多项式系数。

```javascript editor-xlsx
// What is the multinomial coefficient value for a group of numbers in a spreadsheet?

// Find the ratio of combined factorial to individual factorials in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MULTINOMIAL(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 5));
```
