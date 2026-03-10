# SetText

设置批注回复文本。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注回复文本。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置批注回复文本。

```javascript editor-xlsx
// How to change a reply text.

// Replace a reply text with a new text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetText("New reply text.");
worksheet.GetRange("A3").SetValue("Comment's reply text: ");
worksheet.GetRange("B3").SetValue(reply.GetText());
```
