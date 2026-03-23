# COMBIN

返回给定项目数的组合数。

## 语法

```javascript
expression.COMBIN(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 项目总数，一个大于或等于 0 的数值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每个组合中的项目数，一个大于或等于 0 但小于项目总数的数值。 |

## 返回值

number

## 示例

此示例演示如何返回给定项目数的组合数。

```javascript editor-xlsx
// How to find a number of combinations.

// Use function to count possible combinations for a given number of items.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBIN(67, 7));
```
