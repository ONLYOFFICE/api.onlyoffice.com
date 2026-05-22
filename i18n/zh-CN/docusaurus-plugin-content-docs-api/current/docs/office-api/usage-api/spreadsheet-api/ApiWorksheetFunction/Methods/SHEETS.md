# SHEETS

返回引用中的工作表数。

## 语法

```javascript
expression.SHEETS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 将返回其工作表数量的引用。如果省略，则返回包含该函数的工作簿中的工作表数量。 |

## 返回值

number

## 示例

在电子表格中返回引用中的工作表数。

```javascript editor-xlsx
// Count all sheets in the current workbook using the SHEETS function.

// Add additional sheets and retrieve their total count in a cell.

Api.AddSheet("Sheet2")
Api.AddSheet("Sheet3")

// Get the number of sheets
let func = Api.WorksheetFunction;
let result = func.SHEETS();
const worksheet = Api.GetActiveSheet();
worksheet.GetRange("C3").SetValue(result);
```
