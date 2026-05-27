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

Create a new user role for form access control in a document.

```javascript editor-forms
// How do I add a new role that can fill forms in a document?

// Define a role name that controls who can edit form fields in a document.

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
