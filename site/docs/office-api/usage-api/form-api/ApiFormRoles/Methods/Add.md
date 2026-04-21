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

Add new roles in a form document.

```javascript editor-forms
// How to add for a form roles?

// Add and display the result in a form document.

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
