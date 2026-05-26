# LCM

返回最小公倍数。

## 语法

```javascript
expression.LCM(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 最多 255 个将返回最小公倍数的数值。第一个参数是必需的，后续参数是可选的。 |

## 返回值

number

## 示例

计算电子表格中整数的最小公倍数。

```javascript editor-xlsx
// How do I find the smallest number that all values divide evenly into in a spreadsheet?

// Get the least common multiple for use in fraction operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LCM(4, 6, 8, 8, 12, 24, 2, 1));
```
