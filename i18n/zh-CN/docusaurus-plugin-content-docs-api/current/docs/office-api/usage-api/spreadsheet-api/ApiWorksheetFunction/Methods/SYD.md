# SYD

返回资产在指定期间的年数总和折旧。

## 语法

```javascript
expression.SYD(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产的初始成本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产在其使用寿命结束时的残值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产折旧的期数（有时称为资产的使用寿命）。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算折旧的期间。必须使用与资产使用寿命相同的单位。 |

## 返回值

number

## 示例

此示例演示如何返回资产在指定期间的年数总和折旧。

```javascript editor-xlsx
// How to calculate the sum-of-years' digits depreciation.

// Use a function to estimate the sum-of-years' digits depreciation of an asset.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SYD(3500, 500, 5, 3));
```
