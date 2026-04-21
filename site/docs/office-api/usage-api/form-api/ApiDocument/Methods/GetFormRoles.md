# GetFormRoles

Returns a collection of form roles.

## Syntax

```javascript
expression.GetFormRoles();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFormRoles](../../ApiFormRoles/ApiFormRoles.md)

## Example

Get roles manager in a form document.

```javascript editor-forms
// How can I get the form roles using a document in a form document?

// Get the form roles for a document in a form document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});
```
