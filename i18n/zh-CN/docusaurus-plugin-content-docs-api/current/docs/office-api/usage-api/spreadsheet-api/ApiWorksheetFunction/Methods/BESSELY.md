# BESSELY

返回贝塞尔函数 Yn(x)。

## 语法

```javascript
expression.BESSELY(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 函数的阶数。 |

## 返回值

number

## 示例

计算电子表格中第二类贝塞尔函数。

```javascript editor-xlsx
// How do I find the Bessel Y function result for signal analysis in a spreadsheet?

// Use mathematical modeling for vibration and resonance calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELY(2.5, 1));
```
