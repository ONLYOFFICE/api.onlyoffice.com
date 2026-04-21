# RoleProperties

The role properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| color | string | The role color. |

## Example

Create properties and add a new role with the specified properties.

```javascript editor-forms
// Set the role color property for a form role.

// Add a "customer" role with the specified color.

let rolePr = {"color": "#ffefbf"};
formRoles.Add("customer", rolePr);
```
