# RemoveReplies

删除指定的批注回复。

## 语法

```javascript
expression.RemoveReplies(nPos, nCount, bRemoveAll);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | Number | 0 | 要删除的第一个批注回复的位置。 |
| nCount | 可选 | Number | 1 | 要删除的批注回复数量。 |
| bRemoveAll | 可选 | boolean | false | 指定是否删除所有批注回复。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例删除指定的批注回复。

```javascript editor-xlsx
// How to remove replies from the comment.

// Add a comment and replies to it, then remove specified reply and then show replies count.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
comment.AddReply("Reply 2", "John Smith", "uid-1");
comment.RemoveReplies(0, 1, false);
worksheet.GetRange("A3").SetValue("Comment replies count: ");
worksheet.GetRange("B3").SetValue(comment.GetRepliesCount());
```
