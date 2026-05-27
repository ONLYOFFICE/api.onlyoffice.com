# SetAllowedSymbols

Sets the allowed symbols for the current text field. Only the specified characters will be accepted as input.

## Syntax

```javascript
expression.SetAllowedSymbols(symbols);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| symbols | Required | string |  | A string of allowed characters. |

## Returns

boolean

## Example

Restrict a text field to accept only a specific set of characters in a document.

```javascript editor-docx
// How do I limit which characters a user can type into a text field in a document?

// Prevent unwanted input by defining the exact characters allowed in a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Digits", placeholder: "Digits only" });
textForm.SetAllowedSymbols("0123456789");
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form accepting digits only: ");
paragraph.Push(textForm);
```
