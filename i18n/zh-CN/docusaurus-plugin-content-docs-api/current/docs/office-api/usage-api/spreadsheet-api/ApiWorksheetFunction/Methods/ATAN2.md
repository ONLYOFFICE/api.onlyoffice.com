# ATAN2

返回指定 x 和 y 坐标的反正切值，以弧度表示，范围在 -Pi 和 Pi 之间，不包括 -Pi。

## 语法

```javascript
expression.ATAN2(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 点的 x 坐标。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 点的 y 坐标。 |

## 返回值

number

## 示例

计算电子表格中由 x 和 y 坐标定义的点的反正切。

```javascript editor-xlsx
// Get the angle in radians from a pair of coordinates in a spreadsheet.

// Determine direction from the origin to a specific point in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN2(1, -9));
```
