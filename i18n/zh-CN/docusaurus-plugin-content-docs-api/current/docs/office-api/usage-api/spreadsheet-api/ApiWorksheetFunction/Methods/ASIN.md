# ASIN

返回数字的反正弦值，以弧度表示，范围从 *-Pi/2* 到 *Pi/2*。

## 语法

```javascript
expression.ASIN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 角的正弦值。必须在 -1 到 1 之间。 |

## 返回值

number

## 示例

计算电子表格中数字的反正弦并以弧度返回结果。

```javascript editor-xlsx
// Find the inverse sine using the ASIN function in a spreadsheet.

// Determine the angle value from a sine number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));
```
