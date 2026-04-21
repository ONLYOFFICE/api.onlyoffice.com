# GetAllRoles

Lists all available roles.

## Syntax

```javascript
expression.GetAllRoles();
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

Get a list of all roles in the filling order in a form document.

```javascript editor-forms
// How can I get all roles using a form roles in a form document?

// Get all roles for a form roles in a form document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
let orderIndex = 1;
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(orderIndex + ": ");
    paragraph.AddText(role);
    paragraph.AddLineBreak();
    orderIndex++;
});
```
