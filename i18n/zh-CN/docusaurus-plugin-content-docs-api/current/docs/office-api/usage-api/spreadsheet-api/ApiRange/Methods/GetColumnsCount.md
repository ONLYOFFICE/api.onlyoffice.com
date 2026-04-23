# GetColumnsCount

返回当前范围中的列数。

## 语法

```javascript
expression.GetColumnsCount();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取指定范围中的列数。

```javascript editor-xlsx
// How to get a count of columns in the range.

// Get a count of columns in the range and display it in another cell.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:E2");
range.SetValue("I was selected");
worksheet.GetRange("A3").SetValue("Columns count in the selected range should be 5: " + range.GetColumnsCount());
```
