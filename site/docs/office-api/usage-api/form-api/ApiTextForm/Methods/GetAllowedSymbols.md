# GetAllowedSymbols

Returns the allowed symbols for the current text field.

## Syntax

```javascript
expression.GetAllowedSymbols();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the set of characters a text field accepts in a document.

```javascript editor-forms
// How do I find out which symbols are permitted in a text field in a document?

// Confirm the character restriction applied to a text entry area in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Letters", placeholder: "Letters only" });
textForm.SetAllowedSymbols("abcdefghijklmnopqrstuvwxyz");
let allowedSymbols = textForm.GetAllowedSymbols();
let paragraph = doc.GetElement(0);
paragraph.AddText("Allowed symbols: " + allowedSymbols);
paragraph.Push(textForm);
```
