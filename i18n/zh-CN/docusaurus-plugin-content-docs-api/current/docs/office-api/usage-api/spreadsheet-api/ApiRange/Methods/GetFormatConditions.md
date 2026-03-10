# GetFormatConditions

返回当前范围的条件格式规则集合。

## 语法

```javascript
expression.GetFormatConditions();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFormatConditions](../../ApiFormatConditions/ApiFormatConditions.md)

## 示例

This example shows how to get the format conditions collection for a range.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Score');
worksheet.GetRange('A2').SetValue(10);
worksheet.GetRange('A3').SetValue(30);
worksheet.GetRange('A4').SetValue(80);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
formatConditions.AddDatabar();
worksheet.GetRange('C1').SetValue('Format conditions count: ' + formatConditions.GetCount());

```
