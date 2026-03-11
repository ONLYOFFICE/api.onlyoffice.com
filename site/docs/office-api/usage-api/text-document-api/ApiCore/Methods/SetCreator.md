# SetCreator

Sets the document author.

## Syntax

```javascript
expression.SetCreator(sCreator);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCreator | Required | string |  | The document author. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the creator of the current document using the ApiCore.

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
	
```
