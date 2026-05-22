# MUNIT

返回指定维度的单位矩阵。

## 语法

```javascript
expression.MUNIT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定要返回的单位矩阵维数的整数。 |

## 返回值

number

## 示例

在电子表格中生成特定大小的单位矩阵。

```javascript editor-xlsx
// Create a unit matrix and place it in a cell in a spreadsheet.

// Insert a matrix of ones and zeros into your spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MUNIT(3));
```
