# SetAuthorName

设置批注回复作者的姓名。

## 语法

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | 必需 | string |  | 批注回复作者的姓名。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置批注回复作者的姓名。

```javascript editor-xlsx
// How to add author's name to the reply.

// Add a reply to the comment and set author name, then show author name in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetAuthorName("Mark Potato");
worksheet.GetRange("A3").SetValue("Comment's reply author: ");
worksheet.GetRange("B3").SetValue(reply.GetAuthorName());
```
