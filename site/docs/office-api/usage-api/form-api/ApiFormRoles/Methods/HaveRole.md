# HaveRole

Checks if a role with the specified name exists.

## Syntax

```javascript
expression.HaveRole(name);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The role name. |

## Returns

boolean

## Example

This example shows how to add new roles.

```javascript editor-pdf
let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
["Customer", "CEO"].forEach(roleName => {
    if (roles.HaveRole(roleName)) {
        paragraph.AddText(roleName + " role is present in the form");
    } else {
        paragraph.AddText(roleName + " role is not present in the form");
    }
    paragraph.AddLineBreak();
});

```
