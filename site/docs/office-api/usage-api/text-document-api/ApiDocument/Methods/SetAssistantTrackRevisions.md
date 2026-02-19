# SetAssistantTrackRevisions

Enables or disables AI-assisted change tracking in the document.

## Syntax

```javascript
expression.SetAssistantTrackRevisions(isTrack, assistantName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | Required | boolean |  | Specifies whether the change tracking mode is set or not. |
| assistantName | Required | string |  | The AI assistant name. |

## Returns

boolean