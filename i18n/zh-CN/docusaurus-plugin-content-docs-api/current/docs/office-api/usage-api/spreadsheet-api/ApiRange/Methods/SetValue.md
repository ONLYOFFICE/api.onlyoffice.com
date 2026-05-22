# SetValue

设置当前单元格或单元格范围的值。

## 语法

```javascript
expression.SetValue(data);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | string \| boolean \| number \| (string \| boolean \| number)[] \| (string \| boolean \| number)[][] |  | 单元格或单元格范围的通用值。 |

## 返回值

boolean

## 示例

在电子表格的单元格范围中设置值。

```javascript editor-xlsx
// How do I put data into specific cells in a spreadsheet?

// Populate cells with numbers and a formula to calculate their product in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");
```
