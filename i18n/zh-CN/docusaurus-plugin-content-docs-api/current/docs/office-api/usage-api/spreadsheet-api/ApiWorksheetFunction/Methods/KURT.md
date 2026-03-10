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
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个将计算峰度的数值。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回数据集的峰度。

```javascript editor-xlsx
// How to know a data set kurtosis.

// Use a function to find out kurtosis of a data set.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);
```
