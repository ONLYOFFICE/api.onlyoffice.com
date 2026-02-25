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

This example shows how to get a list of all roles in the filling order.

```javascript editor-pdf playground
let doc = editor.GetDocument();
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
