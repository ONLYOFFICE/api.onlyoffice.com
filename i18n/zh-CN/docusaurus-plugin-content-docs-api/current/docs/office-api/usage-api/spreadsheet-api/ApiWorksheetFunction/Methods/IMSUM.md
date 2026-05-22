# IMSUM

返回指定复数的和。

## 语法

```javascript
expression.IMSUM(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 最多 255 个以 *x + yi* 或 *x + yj* 形式表示的复数。 |

## 返回值

number

## 示例

在电子表格中将两个复数相加。

```javascript editor-xlsx
// How do I add two complex numbers in a spreadsheet?

// Calculate the sum of multiple complex values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));
```
