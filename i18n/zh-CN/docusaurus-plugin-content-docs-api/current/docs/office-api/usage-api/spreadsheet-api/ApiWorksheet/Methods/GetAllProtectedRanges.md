# GetAllProtectedRanges

返回当前工作表中的所有受保护区域。

## 语法

```javascript
expression.GetAllProtectedRanges();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md)[] \| null

## 示例

在电子表格中获取表示所有受保护范围的对象。

```javascript editor-xlsx
// How to get all protected ranges in a spreadsheet.

// Get all protected ranges as an array in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange1", "Sheet1!$A$1:$B$1");
worksheet.AddProtectedRange("protectedRange2", "Sheet1!$A$2:$B$2");
let protectedRanges = worksheet.GetAllProtectedRanges();
protectedRanges[0].SetTitle("protectedRangeNew1");
protectedRanges[1].SetTitle("protectedRangeNew2");
```
