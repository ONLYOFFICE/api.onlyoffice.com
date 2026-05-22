# SetFormat

Sets the format for the current text field.

## Syntax

```javascript
expression.SetFormat(format);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | Required | [TextFormFormat](../../Enumeration/TextFormFormat.md) |  | The format to set. |

## Returns

boolean

## Example

Assign an input format to a text field in a document.

```javascript editor-docx
// How do I restrict a text field to accept only a certain type of input in a document?

// Enforce a structured input pattern on a text field to guide user entries in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Phone", placeholder: "Enter digits" });
textForm.SetFormat({ type: "digit" });
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form with digit format: ");
paragraph.Push(textForm);
```
