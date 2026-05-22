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

更改电子表格中批注回复上显示的作者名称。

```javascript editor-xlsx
// How do I update the name shown as the writer of a comment reply in a spreadsheet?

// Replace the existing author label on a reply with a different name in a spreadsheet.

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
