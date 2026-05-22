# COS

返回角度的余弦值。

## 语法

```javascript
expression.COS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其余弦值的弧度角。 |

## 返回值

number

## 示例

计算电子表格中角度的余弦值。

```javascript editor-xlsx
// What is the cosine of a given angle in a spreadsheet?

// Find the ratio of a triangle's side using an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COS(1.5));
```
