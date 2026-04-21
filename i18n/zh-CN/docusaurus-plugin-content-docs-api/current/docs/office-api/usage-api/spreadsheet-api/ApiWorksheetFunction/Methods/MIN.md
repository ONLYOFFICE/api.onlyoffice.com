# MIN

返回一组值中的最小数字。忽略逻辑值和文本。

## 语法

```javascript
expression.MIN(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个数值，将返回其中的最小数字。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

在电子表格中返回一组值中的最小值。忽略逻辑值和文本。

```javascript editor-xlsx
// How to get a minimum number from a list of numbers in a spreadsheet.

// Use a function to find a minimum from a list in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let min = func.MIN(123, 197, 46, 345, 67, 456);
worksheet.GetRange("C1").SetValue(min);
```
