# SUM

将单元格范围中的所有数字相加。

## 语法

```javascript
expression.SUM(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string \| number \| boolean \| (string \| number \| boolean)[] |  | 最多 255 个要相加的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、逻辑值、数字的文本表示形式、区域或数组。 |

## 返回值

number

## 示例

此示例演示如何将单元格区域中的所有数字相加。

```javascript editor-xlsx
// How to sum up all values from the list.

// Use a function to estimate a sum from the cells.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUM(145, 37, 236, 69, 567, 92));
```
