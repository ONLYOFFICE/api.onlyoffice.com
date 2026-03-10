# ApiComment

表示 ApiComment 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| AuthorName | string | 返回或设置批注作者的姓名。 |
| Id | string | 返回当前批注 ID。 |
| QuoteText | string | 返回当前批注的引用文本。 |
| RepliesCount | Number | 返回批注回复的数量。 |
| Solved | boolean | 检查批注是否已解决或将批注标记为已解决。 |
| Text | string | 返回或设置批注文本。 |
| Time | number \| string | 返回或设置当前时区格式的批注创建时间戳。 |
| TimeUTC | number \| string | 返回或设置 UTC 格式的批注创建时间戳。 |
| UserId | string | 返回或设置批注作者的用户 ID。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddReply](./Methods/AddReply.md) | 无 | 向批注添加回复。 |
| [Delete](./Methods/Delete.md) | 无 | 删除 ApiComment 对象。 |
| [GetAuthorName](./Methods/GetAuthorName.md) | string | 返回批注作者的姓名。 |
| [GetClassType](./Methods/GetClassType.md) | "comment" | 返回 ApiComment 类的类型。 |
| [GetId](./Methods/GetId.md) | string | 返回当前批注 ID。 |
| [GetQuoteText](./Methods/GetQuoteText.md) | String \| null | 返回当前批注的引用文本。 |
| [GetRepliesCount](./Methods/GetRepliesCount.md) | Number | 返回批注回复的数量。 |
| [GetReply](./Methods/GetReply.md) | [ApiCommentReply](../ApiCommentReply/ApiCommentReply.md) | 返回指定的批注回复。 |
| [GetText](./Methods/GetText.md) | string | 返回批注文本。 |
| [GetTime](./Methods/GetTime.md) | Number | 返回批注创建时间戳（当前时区格式）。 |
| [GetTimeUTC](./Methods/GetTimeUTC.md) | Number | 返回批注创建时间戳（UTC 格式）。 |
| [GetUserId](./Methods/GetUserId.md) | string | 返回批注作者的用户 ID。 |
| [IsSolved](./Methods/IsSolved.md) | boolean | 检查批注是否已解决。 |
| [RemoveReplies](./Methods/RemoveReplies.md) | 无 | 删除指定的批注回复。 |
| [SetAuthorName](./Methods/SetAuthorName.md) | 无 | 设置批注作者的姓名。 |
| [SetSolved](./Methods/SetSolved.md) | 无 | 将批注标记为已解决。 |
| [SetText](./Methods/SetText.md) | 无 | 设置批注文本。 |
| [SetTime](./Methods/SetTime.md) | 无 | 设置批注创建时间戳（当前时区格式）。 |
| [SetTimeUTC](./Methods/SetTimeUTC.md) | 无 | 设置批注创建时间戳（UTC 格式）。 |
| [SetUserId](./Methods/SetUserId.md) | 无 | 设置批注作者的用户 ID。 |
