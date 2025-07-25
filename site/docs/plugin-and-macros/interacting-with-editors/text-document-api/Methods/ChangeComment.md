# ChangeComment

Changes the specified comment.

## Syntax

```javascript
expression.ChangeComment(sId, oCommentData);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The comment ID. |
| oCommentData | Required | [CommentData](../Enumeration/CommentData.md) |  | An object which contains the new comment data. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("ChangeComment", ["1_631",
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
]);
```
