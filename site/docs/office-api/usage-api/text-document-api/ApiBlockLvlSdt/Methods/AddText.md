# AddText

Adds a text to the current content control.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | String |  | The text which will be added to the content control. |

## Returns

boolean

## Example

This example adds a text to the content control.

```javascript editor-docx
// Creates a block content control in the current document and adds a text to it.

// How to add a text to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
