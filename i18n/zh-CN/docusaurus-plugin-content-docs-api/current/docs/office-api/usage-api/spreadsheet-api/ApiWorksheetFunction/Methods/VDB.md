# VDB

使用双倍余额递减法或其他指定方法，返回资产在任何指定期间（包括部分期间）的折旧。

## 语法

```javascript
expression.VDB(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产的初始成本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产在其使用寿命结束时的残值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产折旧的期数（有时称为资产的使用寿命）。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算折旧的起始期间，使用与资产使用寿命相同的单位。 |
| arg5 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算折旧的结束期间，使用与资产使用寿命相同的单位。 |
| arg6 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 余额下降的比率。如果省略，函数将假定为 2 |
| arg7 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定当折旧大于余额递减计算时是否使用直线折旧（**false** 或省略）。如果设置为 **true**，函数使用余额递减法。 |

## 返回值

number

## 示例

此示例演示如何使用双倍余额递减法或指定的其他方法返回资产在任何指定期间（包括部分期间）的折旧。

```javascript editor-xlsx
// How to estimate depreciation of an asset for any specified period.

// Use a depreciation of an asset for any specified period including partial periods.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VDB(3500, 500, 5, 1, 3, 2, false));
```
