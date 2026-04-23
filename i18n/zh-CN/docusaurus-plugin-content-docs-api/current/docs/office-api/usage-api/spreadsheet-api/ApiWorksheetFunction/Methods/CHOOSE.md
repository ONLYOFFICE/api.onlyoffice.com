# CHOOSE

根据索引号从值列表中选择要执行的值或操作。

## 语法

```javascript
expression.CHOOSE(arg1, args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 值在值列表中的位置，一个大于或等于 1 但小于值列表中值数量的数值。 |
| args | 必需 | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 最多 254 个要分析的值或选定的单元格区域。第一个参数是必需的，后续参数是可选的。参数可以是数字、区域、名称或文本字符串。 |

## 返回值

number

## 示例

此示例演示如何根据索引号从值列表中选择要执行的值或操作。

```javascript editor-xlsx
// How to choose a value or action to perform from a list of values, based on an index number.

// Use function to choose a value or action to perform from a list of values, based on an index number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHOOSE(2, 3, 4, 89, 76, 0));
```
