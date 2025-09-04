# 批注数据

批注数据对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| QuoteText | string | 被引用的批注文本。 |
| Replies | [批注数据](../Enumeration/CommentData.md)[] | 包含批注回复的数组，每个元素都是一个批注数据对象。 |
| Solved | boolean | 指定该批注是否已被解决（**true**）或未解决（**false**）。 |
| Text | string | 批注内容文本。 |
| Time | string | 批注的创建时间（以毫秒为单位）。 |
| UserName | string | 批注作者。 |
## 类型

Object（对象）



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
