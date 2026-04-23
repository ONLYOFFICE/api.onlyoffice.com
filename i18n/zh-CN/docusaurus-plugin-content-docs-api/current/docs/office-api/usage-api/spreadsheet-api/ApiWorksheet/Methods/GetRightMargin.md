# GetRightMargin

返回工作表的右边距。

## 语法

```javascript
expression.GetRightMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取工作表的右边距。

```javascript editor-xlsx
// How to get margin of the sheet's right side.

// Get the size of the right margin of the sheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
