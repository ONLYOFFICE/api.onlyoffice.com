# 批注

批注对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| Data | [批注数据](../Enumeration/CommentData.md) | 包含批注数据的对象。 |
| Id | string | 批注的唯一标识符（ID）。 |
## 类型（Type）

Object（对象）



## 示例

```javascript
let comment = {
    "Id": "1_631",
    "Data": {
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
    }
}
```
