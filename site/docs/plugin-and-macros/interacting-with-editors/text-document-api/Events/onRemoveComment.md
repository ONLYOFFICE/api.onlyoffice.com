# onRemoveComment

The function called when the specified comment is removed with the [RemoveComments](../../text-document-api/Methods/RemoveComments.md) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [Event_comment](../Enumeration/Event_comment.md) | Defines the comment object containing the comment data. |

```javascript
window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    removeComments([comment.Id]);
});
```

