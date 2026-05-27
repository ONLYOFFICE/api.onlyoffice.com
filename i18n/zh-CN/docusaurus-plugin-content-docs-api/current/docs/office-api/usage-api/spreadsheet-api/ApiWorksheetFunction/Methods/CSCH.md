# CSCH

返回角度的双曲余割值。

## 语法

```javascript
expression.CSCH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算其双曲余割的弧度角。其绝对值必须小于 *2^27*。 |

## 返回值

number

## 示例

计算电子表格中角度的双曲余割。

```javascript editor-xlsx
// What is the hyperbolic cosecant value in a spreadsheet?

// Determine the inverse hyperbolic sine ratio in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CSCH(0.785398));
```
