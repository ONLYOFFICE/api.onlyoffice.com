# Save

保存对指定文档的更改。

## 语法

```javascript
expression.Save();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将电子表格中所有未保存的编辑持久化到磁盘。

```javascript editor-xlsx
// How do I make sure all recent changes are written and not lost in a spreadsheet?

// Commit the current state of the document so no work is discarded in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();
```
