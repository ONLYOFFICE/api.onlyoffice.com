# Add

Adds a new form role.

## Syntax

```javascript
expression.Add(name, props);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of role being added. |
| props | Required | [RoleProperties](../../Enumeration/RoleProperties.md) |  | The role properties. |

## Returns

boolean

## Example

This example shows how to add new roles.

```javascript editor-pdf playground
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
