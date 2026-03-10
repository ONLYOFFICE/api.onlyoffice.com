# SLN

返回资产一个期间的直线折旧。

## 语法

```javascript
expression.SLN(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产的初始成本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产在其使用寿命结束时的残值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 资产折旧的期数（有时称为资产的使用寿命）。 |

## 返回值

number

## 示例

此示例演示如何返回资产一期的直线折旧。

```javascript editor-xlsx
// How to return the straight-line depreciation of an asset.

// Use a function to get the straight-line depreciation of an asset.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SLN(3500, 500, 5));
```
