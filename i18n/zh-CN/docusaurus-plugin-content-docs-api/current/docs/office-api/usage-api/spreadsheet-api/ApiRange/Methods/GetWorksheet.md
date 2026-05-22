# GetWorksheet

返回表示包含指定范围的工作表的 Worksheet 对象。它将以只读模式可用。

## 语法

```javascript
expression.GetWorksheet();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## 示例

查找电子表格中选定范围所属的工作表。

```javascript editor-xlsx
// How do I identify the sheet that contains a particular range in a spreadsheet?

// Confirm the parent sheet of a range by checking its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
let oSheet = range.GetWorksheet();
worksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());
```
