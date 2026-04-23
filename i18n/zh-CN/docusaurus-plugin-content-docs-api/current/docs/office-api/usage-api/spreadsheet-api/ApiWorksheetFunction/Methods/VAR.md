# VAR

基于样本估算方差（忽略样本中的逻辑值和文本）。

## 语法

```javascript
expression.VAR(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | number \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 255 个将计算方差的数值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何根据样本估算方差（忽略样本中的逻辑值和文本）。

```javascript editor-xlsx
// How to estimate variance based on a sample.

// Use a function to estimate variance ignoring logical and text values.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.VAR(1, 4, 2, 6, 0, 1, 3, 8, 0, 0, 6, 10, 0, 0, 7, 12)
worksheet.GetRange("B2").SetValue(result);


```
