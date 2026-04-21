# GetRoleColor

Returns the RGB color of the specified role.

## Syntax

```javascript
expression.GetRoleColor(name);
```

`expression` - A variable that represents a [ApiFormRoles](../ApiFormRoles.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The role name. |

## Returns

null \| Object

## Example

Get the color of role in a form document.

```javascript editor-forms
// How do I get the role color in a form document?

// Get the role color using a form roles object.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let color = roles.GetRoleColor("Customer");
let paragraph = doc.GetElement(0);
paragraph.AddText("Role color: rgb(" + color.r + ", " + color.g + ", " + color.b + ")");
```
