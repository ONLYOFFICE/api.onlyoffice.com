# ACOTH

返回数字的反双曲余切值。

## 语法

```javascript
expression.ACOTH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 角的双曲余切值。必须小于 -1 或大于 1。 |

## 返回值

number

## 示例

计算电子表格中数字的反双曲余切。

```javascript editor-xlsx
// Compute the ACOTH value for mathematical analysis in a spreadsheet.

// Output the inverse hyperbolic cotangent to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOTH(3));
```
