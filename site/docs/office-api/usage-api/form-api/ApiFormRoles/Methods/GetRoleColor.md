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

This example shows how to get the color of role.

```javascript editor-pdf
let doc = editor.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let color = roles.GetRoleColor("Customer");
let paragraph = doc.GetElement(0);
paragraph.AddText("Role color: rgb(" + color.r + ", " + color.g + ", " + color.b + ")");

```
