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

此示例创建一个新的历史记录点。

```javascript editor-xlsx
// Add history point for a range.

// How to make a history point.

var worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");
```
