# MAXA

返回一组值中的最大值。不忽略逻辑值和文本。

## 语法

```javascript
expression.MAXA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| string \| boolean \| (number \| string \| boolean)[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个值（数字、文本、逻辑值），将返回其中的最大值。第一个参数是必需的，后续参数是可选的。参数可以是数字、逻辑值和数字的文本表示形式、名称、区域或数组。 |

## 返回值

number

## 示例

查找电子表格中包含数字、文本和逻辑值的集合中的最大值。

```javascript editor-xlsx
// How do I find the maximum value when my list contains mixed data types in a spreadsheet?

// Get the highest value from a collection of mixed data in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5").GetValue();
let func = Api.WorksheetFunction;
let maxA = func.MAX(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(maxA);
```
