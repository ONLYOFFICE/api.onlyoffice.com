# onRemoveComment

The function called when the specified comment is removed with the [RemoveComments](../../methods/plugins/methods/text-document-api/Api/Methods/RemoveComments) method.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| comment | [comment](Enumeration/comment.md) | Defines the comment object containing the comment data. |

```javascript
window.Asc.plugin.attachEditorEvent("onRemoveComment", (comment) => {
    removeComments([comment.Id]);
});
```

