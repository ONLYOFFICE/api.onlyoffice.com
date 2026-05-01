# Clear

清除当前范围。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

清除电子表格中的范围。

```javascript editor-xlsx
// How to clear a content of a range in a spreadsheet.

// Get a range and remove everything from it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");
```
