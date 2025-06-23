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

This example shows how to get roles manager.

```javascript editor-pdf
let doc = editor.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});

```
