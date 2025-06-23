# SetContentStatus

Sets the document content status.

## Syntax

```javascript
expression.SetContentStatus(sStatus);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStatus | Required | string |  | The document content status. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to get the content status of the current document using the ApiCore.

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);

```
