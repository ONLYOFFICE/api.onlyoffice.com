# GetAreas

返回范围的集合。

## 语法

```javascript
expression.GetAreas();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiAreas](../../ApiAreas/ApiAreas.md)

## 示例

在电子表格中将多区域选区分解为各个独立范围。

```javascript editor-xlsx
// How do I count the separate areas that make up a range in a spreadsheet?

// Tally the distinct sub-ranges within a selection and write the total to a cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let count = areas.GetCount();
range = worksheet.GetRange("A5");
range.SetValue("The number of ranges in the areas: ");
range.AutoFit(false, true);
worksheet.GetRange("B5").SetValue(count);
```
