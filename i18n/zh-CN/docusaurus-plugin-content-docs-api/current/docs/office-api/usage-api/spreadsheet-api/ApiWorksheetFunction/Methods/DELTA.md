# DELTA

测试两个数字是否相等。如果数字相等，函数返回 1，否则返回 0。

## 语法

```javascript
expression.DELTA(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 第一个数字。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 第二个数字。 |

## 返回值

number

## 示例

在电子表格中检查两个数字是否相同。

```javascript editor-xlsx
// Are these two values the same or different in a spreadsheet?

// Verify whether your numbers match by returning 1 for equal or 0 for different in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));
```
