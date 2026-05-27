# AddComment

向工作簿添加批注。

## 语法

```javascript
expression.AddComment(oCommentData);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCommentData | 必需 | [CommentData](../Enumeration/CommentData.md) |  | 包含批注数据的对象。 |

## 返回值

string \| null

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
