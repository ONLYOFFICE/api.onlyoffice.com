# CreateNewHistoryPoint

创建新的历史记录点。

## 语法

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中创建新的历史点。

```javascript editor-xlsx
// Add history point for a range in a spreadsheet.

// How to make a history point in a spreadsheet.

var worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");
```
