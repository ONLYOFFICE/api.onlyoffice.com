# AddReply

向批注添加回复。

## 语法

```javascript
expression.AddReply(sText, sAuthorName, sUserId, nPos);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | String |  | 批注回复文本（必需）。 |
| sAuthorName | 必需 | String |  | 批注回复作者的姓名（可选）。 |
| sUserId | 必需 | String |  | 批注回复作者的用户 ID（可选）。 |
| nPos | 可选 | Number | this.GetRepliesCount() | 批注回复位置。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中向批注添加回复。

```javascript editor-xlsx
// The comment is added to cell A1 containing a numeric value.

// Retrieve the reply text with the specified author name and user id and display it in cell B3.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply text: ");
worksheet.GetRange("B3").SetValue(reply.GetText());
```
