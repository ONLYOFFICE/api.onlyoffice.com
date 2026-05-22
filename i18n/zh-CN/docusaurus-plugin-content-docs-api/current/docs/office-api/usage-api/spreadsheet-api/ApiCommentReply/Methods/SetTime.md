# SetTime

设置当前时区格式的批注回复创建时间戳。

## 语法

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | 当前时区格式的批注回复创建时间戳。 |

## 返回值

此方法不返回任何数据。

## 示例

设置电子表格中批注回复的本地时间戳。

```javascript editor-xlsx
// How do I update when a comment reply was posted in a spreadsheet?

// Record a new creation time for an existing comment reply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetTime(Date.now());
worksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
worksheet.GetRange("B3").SetValue(reply.GetTime());
```
