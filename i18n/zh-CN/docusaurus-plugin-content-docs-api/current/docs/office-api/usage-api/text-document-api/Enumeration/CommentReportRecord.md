# CommentReportRecord

表示单个批注记录。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| CommentMessage | string | 批注文本。 |
| Date | number | 批注的本地时间戳。 |
| DateUTC | number | 批注的 UTC 时间戳。 |
| IsAnswer | boolean | 指定批注是否为回复。 |
| QuoteText | string | 引用的文本（如果可用）。 |
