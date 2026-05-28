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

在电子表格中将单元格范围内的所有数字相加。

```javascript editor-xlsx
// Sum all values using the SUM function with numeric arguments.

// Returns the total sum of the specified values.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUM(145, 37, 236, 69, 567, 92));
```
