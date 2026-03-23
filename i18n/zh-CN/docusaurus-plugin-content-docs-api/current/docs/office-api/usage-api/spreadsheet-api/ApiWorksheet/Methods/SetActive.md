# SetActive

激活当前工作表。

## 语法

```javascript
expression.SetActive();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例激活工作表。

```javascript editor-xlsx
// How to set an active sheet.

// Set a current sheet active.

Api.AddSheet("New_sheet");
let sheet = Api.GetSheet("New_sheet");
sheet.SetActive();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("The current sheet is active.");
```
