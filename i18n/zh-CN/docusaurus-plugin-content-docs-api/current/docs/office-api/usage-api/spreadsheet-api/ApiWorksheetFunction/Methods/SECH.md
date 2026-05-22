# SECH

返回角度的双曲正割值。

## 语法

```javascript
expression.SECH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其双曲正割值的弧度角。 |

## 返回值

number

## 示例

在电子表格中返回角度的双曲正割值。

```javascript editor-xlsx
// Get the hyperbolic secant value of an angle using the SECH function.

// Apply the function to calculate and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SECH(0.785398));
```
