# COMPLEX

将实部和虚部系数转换为复数。

## 语法

```javascript
expression.COMPLEX(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 复数的实数系数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 复数的虚数系数。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 复数虚部的后缀。可以是小写的 "i" 或 "j"。如果省略，函数将假定后缀为 "i"。 |

## 返回值

number

## 示例

此示例演示如何将实数和虚数系数转换为复数。

```javascript editor-xlsx
// How to create a complex number using coefficients.

// Use function to convert real and imaginary coefficients into a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMPLEX(-2, 2.5, "i"));
```
