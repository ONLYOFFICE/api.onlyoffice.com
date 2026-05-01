# ATANH

返回数字的反双曲正切值。

## 语法

```javascript
expression.ATANH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 介于 -1 和 1 之间的任何实数，不包括 -1 和 1。 |

## 返回值

number

## 示例

在电子表格中返回反双曲正切值。

```javascript editor-xlsx
// How to get return the inverse hyperbolic tangent in a spreadsheet.

// Use function to get an inverse hyperbolic tangent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATANH(0.5));
```
