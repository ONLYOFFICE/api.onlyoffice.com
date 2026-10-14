# CommentData

The comment data.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| AnnotType | string | The annotation comment type. |
| Replies | [CommentData](../Enumeration/CommentData.md)[] | An array containing the comment replies represented as the *CommentData* object. |
| Text | string | The comment text. |
| Time | string | The time when the comment was posted (in milliseconds). |
| UserId | string | The user ID of the comment author. |
| UserName | string | The comment author. |

## Example

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
