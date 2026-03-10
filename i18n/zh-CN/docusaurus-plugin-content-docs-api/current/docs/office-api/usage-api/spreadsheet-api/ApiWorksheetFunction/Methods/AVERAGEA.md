# AVERAGEA

返回指定参数的平均值（算术平均数），将参数中的文本和 -**false** 视为 0；-**true** 视为 1。

## 语法

```javascript
expression.AVERAGEA(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| number[] |  | 最多 255 个数值，将返回这些数值的平均值。第一个参数是必需的，后续参数是可选的。参数可以是数字、文本或逻辑值（如 **true** 和 **false**）、名称或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回指定参数的平均值（算术平均数）。

```javascript editor-xlsx
// How to find an average (arithmetic mean).

// Use function to get the find an average (arithmetic mean).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGEA(78, 98, 46, 123, 45, true, false);
worksheet.GetRange("B2").SetValue(ans);
```
