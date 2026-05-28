# KURT

返回数据集的峰度。

## 语法

```javascript
expression.KURT(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个数值，用于计算峰度。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

计算电子表格中一组数字的峰度。

```javascript editor-xlsx
// How do I measure the shape of a data distribution in a spreadsheet?

// Find the kurtosis value that describes the peakedness of a dataset in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);
```
