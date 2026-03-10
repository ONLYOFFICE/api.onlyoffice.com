# Add

将数据验证添加到指定区域。

## 语法

```javascript
expression.Add(Type, AlertStyle, Operator, Formula1, Formula2);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | 必需 | [ValidationType](../../Enumeration/ValidationType.md) |  | 验证类型。 |
| AlertStyle | 可选 | [ValidationAlertStyle](../../Enumeration/ValidationAlertStyle.md) |  | 验证警告样式。 |
| Operator | 可选 | [ValidationOperator](../../Enumeration/ValidationOperator.md) |  | 数据验证运算符。 |
| Formula1 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 数据验证中的第一个公式。 |
| Formula2 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 数据验证中的第二个公式。 |

## 返回值

[ApiValidation](../../ApiValidation/ApiValidation.md) \| null

## 示例

This example adds a data validation rule to a range of cells.

```javascript editor-xlsx
// How to apply data validation to a range of cells.

// Get a range from the worksheet and add data validation to it.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = worksheet.GetRange("A2").GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
worksheet.GetRange("A4").SetValue("Data Validation is now applied for A2 only");

```
