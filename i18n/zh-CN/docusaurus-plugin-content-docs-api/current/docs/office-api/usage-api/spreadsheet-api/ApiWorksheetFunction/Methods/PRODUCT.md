# PRODUCT

将所有作为参数给出的数字相乘。

## 语法

```javascript
expression.PRODUCT(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 255 个将被相乘的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、区域或数字数组。 |

## 返回值

number

## 示例

在电子表格中将一组数字相乘。

```javascript editor-xlsx
// What is the product of multiple numbers in a spreadsheet?

// Calculate the result of multiplying a series of values together in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRODUCT(65, 34, 165, 6, 9, 54));
```
