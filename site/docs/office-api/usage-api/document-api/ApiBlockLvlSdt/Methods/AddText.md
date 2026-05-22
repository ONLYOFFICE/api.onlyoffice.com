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

Type text directly into a content control in a document.

```javascript editor-docx
// How do I fill a content control with text in a document?

// Place a block content control on the page and write text inside it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
