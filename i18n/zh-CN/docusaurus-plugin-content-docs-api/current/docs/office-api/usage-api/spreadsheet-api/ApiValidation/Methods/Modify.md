# Modify

修改区域的数据验证。

## 语法

```javascript
expression.Modify(Type, AlertStyle, Operator, Formula1, Formula2);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | 可选 | [ValidationType](../../Enumeration/ValidationType.md) |  | 验证类型。 |
| AlertStyle | 可选 | [ValidationAlertStyle](../../Enumeration/ValidationAlertStyle.md) |  | 验证警告样式。 |
| Operator | 可选 | [ValidationOperator](../../Enumeration/ValidationOperator.md) |  | 数据验证运算符。 |
| Formula1 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 数据验证中的第一个公式。 |
| Formula2 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 数据验证中的第二个公式。 |

## 返回值

[ApiValidation](../../ApiValidation/ApiValidation.md) \| null

## 示例

This example modifies a data validation rule for a range of cells.

```javascript editor-xlsx
// How to change data validation for a range of cells.

// Get a range from the worksheet and modify its data validation.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10 for A2 and A5");
const range = worksheet.GetRange("A2:A5");
const targetRange = worksheet.GetRange("A4:A5");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
targetRange.GetValidation().Modify("xlValidateDecimal", "xlValidAlertStop", "xlLess", "12");
worksheet.GetRange("A6").SetValue("Data Validation is now modified for A4:A5, to accept values less than 12.");

```
