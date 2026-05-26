# ISNONTEXT

Checks whether a value is not text (blank cells are not text), and returns - **true** or - **false**.

## 语法

```javascript
expression.ISNONTEXT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | 要测试的值。 |

## 返回值

boolean

## 示例

确定电子表格中的单元格是否包含文本以外的内容。

```javascript editor-xlsx
// How do I verify if a cell is not text (includes numbers and blank cells) in a spreadsheet?

// Use a function to separate text values from numbers and empty cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNONTEXT("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNONTEXT(255));
worksheet.GetRange("A3").SetValue(func.ISNONTEXT("Online Office"));
```
