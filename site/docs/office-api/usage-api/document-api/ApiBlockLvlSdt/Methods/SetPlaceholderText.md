# SetPlaceholderText

Sets the placeholder text to the current content control.

## Syntax

```javascript
expression.SetPlaceholderText(text);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text that will be set to the current content control. |

## Returns

boolean

## Example

Set the placeholder text for the content control in a document.

```javascript editor-docx
// Create a block content control and set the placeholder text to it in a document.

// How to add the placeholder text to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");
```
