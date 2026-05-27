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

Retrieve the list of user roles assigned to form fields in a document.

```javascript editor-forms
// How do I see what roles have access to form fields in a document?

// Access the role management system to view form permissions in a document.

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
