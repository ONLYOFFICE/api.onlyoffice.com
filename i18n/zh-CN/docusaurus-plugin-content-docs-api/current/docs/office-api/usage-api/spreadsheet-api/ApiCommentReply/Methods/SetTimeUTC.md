# SetTimeUTC

设置 UTC 格式的批注回复创建时间戳。

## 语法

```javascript
expression.SetTimeUTC(nTimeStamp);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | UTC 格式的批注回复创建时间戳。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置 UTC 格式的批注回复创建时间戳。

```javascript editor-xlsx
// How to change a timestamp in UTC when a reply was created.

// Add a reply then update its creation time in UTC format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetTimeUTC(Date.now());
worksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
worksheet.GetRange("B3").SetValue(reply.GetTimeUTC());
```
