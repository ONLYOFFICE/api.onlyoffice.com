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

Add placeholder text to an empty content control in a document.

```javascript editor-docx
// How do I set hint text that appears inside an unfilled content control in a document?

// Guide users with a prompt message shown inside a blank content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");
```
