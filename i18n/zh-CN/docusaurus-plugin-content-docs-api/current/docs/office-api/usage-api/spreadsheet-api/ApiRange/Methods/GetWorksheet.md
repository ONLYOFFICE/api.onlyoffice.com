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

此示例演示如何获取表示包含指定范围的工作表的 Worksheet 对象。

```javascript editor-xlsx
// How to get a worksheet where a range is contained in.

// Get a worksheet from its range and show its name.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
let oSheet = range.GetWorksheet();
worksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());
```
