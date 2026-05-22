# GetValidation

返回与此范围关联的数据验证对象。如果尚不存在验证对象，将创建一个。

## 语法

```javascript
expression.GetValidation();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiValidation](../../ApiValidation/ApiValidation.md)

## 示例

检索电子表格中设置在单元格范围上的数据验证规则。

```javascript editor-xlsx
// How do I access the validation settings applied to a range in a spreadsheet?

// Inspect and configure input restrictions on a range by reading its validation object in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Try to enter a whole number less than 10 in A2:B5. Warning will be shown.');
const range = worksheet.GetRange('A2:B5');
const validation = range.GetValidation();
validation.Add('xlValidateWholeNumber', 'xlValidAlertWarning', 'xlGreater', 10);

worksheet.GetRange('A7').SetValue('Type:');
worksheet.GetRange('B7').SetValue(validation.GetType());
worksheet.GetRange('A8').SetValue('Range:');
worksheet.GetRange('B8').SetValue(validation.GetParent().GetAddress());
```
