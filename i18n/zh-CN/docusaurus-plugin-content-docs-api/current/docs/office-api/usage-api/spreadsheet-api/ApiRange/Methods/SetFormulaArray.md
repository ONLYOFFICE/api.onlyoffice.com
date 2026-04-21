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

设置范围的数组公式。

```javascript editor-xlsx
// How to set the array formula value.

// Set formula array and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");
```
