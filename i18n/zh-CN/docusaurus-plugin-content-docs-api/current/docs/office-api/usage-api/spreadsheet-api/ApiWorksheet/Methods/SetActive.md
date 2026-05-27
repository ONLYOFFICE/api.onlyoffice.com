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

boolean

## 示例

在电子表格中将焦点切换到特定工作表。

```javascript editor-xlsx
// How do I make a particular sheet the active one in a spreadsheet?

// Bring a named sheet to the foreground so it becomes the working sheet in a spreadsheet.

Api.AddSheet("New_sheet");
let sheet = Api.GetSheet("New_sheet");
sheet.SetActive();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("The current sheet is active.");
```
