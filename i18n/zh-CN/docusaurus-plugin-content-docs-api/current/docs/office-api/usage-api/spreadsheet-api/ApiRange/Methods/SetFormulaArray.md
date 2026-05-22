# SetFormulaArray

设置当前范围的数组公式。

## 语法

```javascript
expression.SetFormulaArray(data);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | string \| boolean \| number |  | 单元格或单元格范围的通用值。 |

## 返回值

boolean

## 示例

在电子表格中为单元格范围应用数组公式。

```javascript editor-xlsx
// How do I fill multiple cells with a single shared formula in a spreadsheet?

// Enter one formula that automatically populates an entire block of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");
```
