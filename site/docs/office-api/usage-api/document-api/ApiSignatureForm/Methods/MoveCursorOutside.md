# MoveCursorOutside

Places a cursor before/after the current form.

Inherited from [ApiFormBase.MoveCursorOutside](../../ApiFormBase/Methods/MoveCursorOutside.md).

## Syntax

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | Optional | boolean | true | Specifies whether a cursor will be placed before (false) or after (true) the current form. |

## Returns

boolean

## Example

Place the text cursor immediately after a signature field in a document.

```javascript editor-docx
// How do I move focus past a signature field so I can continue typing in a document?

// Step the cursor out of a signature field to resume editing surrounding content in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.MoveCursorOutside();
```
