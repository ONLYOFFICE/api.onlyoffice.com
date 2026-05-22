# SetFormula

为当前单元格或单元格范围设置公式或值。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetFormula(data);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | string \| number \| boolean \| (string \| number \| boolean)[] \| (string \| number \| boolean)[][] |  | 单元格或单元格范围的公式或值。 |

## 返回值

boolean

## 示例

此示例展示如何为指定范围设置公式。

```javascript editor-xlsx
// How to set a formula to a cell.

// Set a formula to a cell and get it back to display in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetFormula("=SUM(B1:C1)");
let formula = range.GetFormula();
worksheet.GetRange("A3").SetValue("Formula from cell A1: " + formula);
```
