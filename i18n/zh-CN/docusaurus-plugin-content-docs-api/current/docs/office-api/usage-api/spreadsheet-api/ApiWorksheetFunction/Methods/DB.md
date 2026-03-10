# DB

使用固定余额递减法返回资产在指定期间的折旧。

## 语法

```javascript
expression.DB(arg1, arg2, arg3, arg4, arg5);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产的初始成本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产在其使用寿命结束时的残值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产折旧的期数（有时称为资产的使用寿命）。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算折旧的期间。期间必须使用与资产使用寿命相同的单位。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 第一年的月数。如果省略此参数，则假定为 12。 |

## 返回值

number

## 示例

此示例演示如何使用固定余额递减法返回资产在指定期间的折旧。

```javascript editor-xlsx
// How to get the depreciation of an asset for a specified period.

// Use function to return the depreciation of an asset for a specified period using the fixed-declining balance method.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DB(3500, 500, 5, 1, 10));
```
