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

获取电子表格中的范围集合。

```javascript editor-xlsx
// How to get range areas in a spreadsheet.

// Get range areas, count them and display the result in the worksheet.

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
