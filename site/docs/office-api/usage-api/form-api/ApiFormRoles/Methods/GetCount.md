# GetCount

Returns a number of form roles.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the number of roles in a form document.

```javascript editor-forms
// How do I get the count in a form document?

// Get the count using a form roles object.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});
let numRoles = roles.GetCount();
paragraph.AddText("Number of roles: " + numRoles);
```
