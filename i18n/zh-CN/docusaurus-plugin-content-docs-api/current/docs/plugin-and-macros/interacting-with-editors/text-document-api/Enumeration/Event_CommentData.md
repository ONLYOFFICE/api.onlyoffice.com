# Event_CommentData

批注数据。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Replies | [Event_CommentData](../Enumeration/Event_CommentData.md)[] | 包含以 *CommentData* 对象表示的批注回复的数组。 |
| Solved | boolean | 指定批注是否已解决（**true**）或未解决（**false**）。 |
| Text | string | 批注文本。 |
| Time | string | 批注发布时间（以毫秒为单位）。 |
| UserName | string | 批注作者。 |
## 类型

Object



## 示例

```javascript
let commentData = {
    "UserName": "John Smith",
    "Text": "comment",
    "Time": "1662737941471",
    "Solved": true,
    "Replies": [
        {
            "UserName": "Mark Potato",
            "Text": "reply 1",
            "Time": "1662740895892",
            "Solved": false
        }
    ]
};
window.Asc.plugin.executeMethod ("AddComment", [commentData]);
```
