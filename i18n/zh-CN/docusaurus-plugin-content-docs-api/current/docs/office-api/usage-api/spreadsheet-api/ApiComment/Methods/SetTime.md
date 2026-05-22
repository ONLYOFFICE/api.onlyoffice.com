# SetTime

设置批注创建时间戳（当前时区格式）。

## 语法

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | 批注创建时间戳（当前时区格式）。 |

## 返回值

此方法不返回任何数据。

## 示例

更新电子表格中批注的记录创建时间。

```javascript editor-xlsx
// How do I change when a comment appears to have been created in a spreadsheet?

// Overwrite the original timestamp on a comment with a new time in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp: ");
comment.SetTime(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTime());
```
