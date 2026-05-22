# Delete

删除对象。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

从电子表格中的单元格范围移除数据验证规则。

```javascript editor-xlsx
// How do I clear an existing input restriction from a cell range in a spreadsheet?

// Lift a validation constraint so cells accept any value again in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimals to be more than 10 for A2 and A3");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
const targetedRange = worksheet.GetRange("A2");
targetedRange.GetValidation().Delete();
worksheet.GetRange("A4").SetValue("Data Validation is now removed for A2");
```
