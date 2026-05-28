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

Assign a color to a role in a document.

```javascript editor-forms
// How do I apply a specific color to identify a role in a document?

// Change the color value for a role to customize its appearance in a document.

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
