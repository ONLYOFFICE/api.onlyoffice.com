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

View all user roles defined for your form in a document.

```javascript editor-forms
// How do I see every role that can access form fields in a document?

// List all the role names available for controlling form permissions in a document.

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
