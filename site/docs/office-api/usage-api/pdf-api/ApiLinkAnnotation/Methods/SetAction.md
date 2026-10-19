# SetAction

Sets the action executed when the link is clicked.

## Syntax

```javascript
expression.SetAction(action);
```

`expression` - A variable that represents an [ApiLinkAnnotation](../ApiLinkAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | Required | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | GoTo, URI, or another PDF action; null removes the action. |

## Returns

boolean
