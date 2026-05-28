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

boolean

## 示例

保存撤消检查点，以便可以在电子表格中回滚此点之前的更改。

```javascript editor-xlsx
// How do I mark the current state so I can undo back to it later in a spreadsheet?

// Preserve a recoverable snapshot of the document at a specific moment in a spreadsheet.

var worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");
```
