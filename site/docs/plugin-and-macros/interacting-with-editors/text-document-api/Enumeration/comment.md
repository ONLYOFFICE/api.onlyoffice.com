# comment

Comment object.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Data | [CommentData](../Enumeration/CommentData.md) | An object which contains the comment data. |
| Id | string | The comment ID. |

## Example

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
