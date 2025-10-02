# 添加评论

向演示文稿添加评论。

## 语法

```javascript
expression.AddComment(oCommentData);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| -------- | -------------- | ------------- | ----------- | -------- |
| oCommentData | 必填 | [批注数据](../Enumeration/CommentData.md) | 无 | 包含评论数据的对象。 |

## 返回值

string（字符串） \| null  

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddComment", [
    {
        "UserName": "John Smith",
        "QuoteText": "text",
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
], function (comment) {
    console.log (comment)
});
```
