# SetRoleColor

Sets the color for the specified role.

## Syntax

```javascript
expression.SetRoleColor(name, color);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The role name. |
| color | Required | string |  | The role color. |

## Returns

boolean

## Example

Change the color of role in a form document.

```javascript editor-forms
// How to set role color for a form roles?

// Set role color and display the result in a form document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.SetRoleColor("Customer", "#C6E0B3");
doc.InsertTextForm({
	key: "Name",
	role: "Customer",
	placeholder: "Enter your name"
});
```
