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

此示例从单元格范围删除数据验证规则。

```javascript editor-xlsx
// How to remove data validation from a range of cells.

// Get a range from the worksheet and delete its data validation.

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
