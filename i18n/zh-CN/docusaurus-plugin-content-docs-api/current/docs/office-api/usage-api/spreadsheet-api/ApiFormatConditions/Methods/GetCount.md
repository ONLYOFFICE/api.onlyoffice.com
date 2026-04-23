# GetCount

返回集合中条件格式规则的数量。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例获取区域中条件格式规则的数量。

```javascript editor-xlsx
// How to get the number of conditional formatting rules applied to cells.

// Get count of conditional formatting rules.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();

worksheet.GetRange("B1").SetValue("Count: " + formatConditions.GetCount());

```
